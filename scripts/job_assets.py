# /// script
# dependencies = ["pillow"]
# ///
import hashlib
import io
import json
import pathlib
import time
import urllib.request

from PIL import Image, ImageFilter

API = "https://datasets-server.huggingface.co/rows?dataset={ds}&config=default&split=train&offset={off}&length={n}"
IMG = pathlib.Path(__file__).resolve().parent.parent / "img"
SIGNAL = (22, 100, 240)
JOBS = [("map", 8, .10, .40, 1.0), ("monitor", 7, .25, .70, 1.0), ("find", 6, .01, .12, .05), ("measure", 5, .20, .60, 1.0)]
ALLOW = {
    "aachen", "bielefeld", "dortmund", "dortmunt", "dusseldorf", "koeln", "muenster",
    "christchurch", "chisinau", "ngaoundere", "kinshasa", "pointenoire", "accra",
    "monrovia", "niamey", "mahe", "dar es salaam", "zanzibar", "kampala",
    "buenos aires", "rosario", "melbourne", "coxs bazar", "dhaka", "santiago",
    "bogota", "svaneti", "western", "al qurnah", "dowa", "ulaanbaatar", "maputo",
    "baybay", "san tome", "sao tome", "chiangmai", "lohur", "kagera", "tonga", "soriano",
}


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "locamage.com asset build"})
    with urllib.request.urlopen(req) as r:
        return r.read()


def load(entry):
    return Image.open(io.BytesIO(fetch(entry["src"])))


def border_frac(mask):
    w, h = mask.size
    edges = [mask.crop(box).histogram()[255] for box in ((0, 0, w, 1), (0, h - 1, w, h), (0, 0, 1, h), (w - 1, 0, w, h))]
    return sum(edges) / (2 * w + 2 * h)


def tint(image, mask, grow):
    layer = Image.blend(image, Image.new("RGB", image.size, SIGNAL), .55)
    return Image.composite(layer, image, mask.filter(ImageFilter.MaxFilter(grow)))


def save(name, img):
    out = []
    for w in sorted({min(760, img.width), img.width}):
        scaled = img.resize((w, round(img.height * w / img.width)), Image.LANCZOS)
        scaled.save(IMG / f"{name}-{w}.webp", "WEBP", quality=82)
        out.append(f"{name}-{w}.webp {w}w")
    return out


manifest = {}

oscd = [r["row"] for r in json.loads(fetch(API.format(ds="blanchon%2FOSCD_RGB", off=0, n=14)))["rows"]]
oscd.sort(key=lambda r: r["mask"]["width"] * r["mask"]["height"], reverse=True)
for row in oscd:
    mask = load(row["mask"]).convert("L").point(lambda v: 255 * (v > 0))
    frac = mask.histogram()[255] / (mask.width * mask.height)
    if .015 <= frac <= .35:
        after = load(row["image2"]).convert("RGB")
        manifest["compare"] = {"srcset": save("job_compare", tint(after, mask, 5)), "source": "OSCD · Sentinel-2", "frac": round(frac, 3)}
        break

rows = []
for off in (0, 50, 700, 750, 1400, 1450, 2000, 2050, 2600):
    rows += [r["row"] for r in json.loads(fetch(API.format(ds="EVER-Z%2Fopen_earth_map", off=off, n=50)))["rows"]]
    time.sleep(1)
rows.sort(key=lambda r: hashlib.md5(r["image_name"].encode()).hexdigest())

used = set()
masks = {}
for job, cls, lo, hi, edge in JOBS:
    for row in rows:
        name = row["image_name"]
        city = " ".join(name.rsplit(".", 1)[0].split("_")[:-1]).title()
        if city.lower() not in ALLOW or city in used:
            continue
        if name not in masks:
            masks[name] = load(row["mask"]).convert("L")
        m = masks[name].point(lambda v, c=cls: 255 * (v == c)).filter(ImageFilter.MinFilter(3))
        frac = m.histogram()[255] / (m.width * m.height)
        if lo <= frac <= hi and border_frac(m) <= edge:
            image = load(row["image"]).convert("RGB")
            void = image.convert("L").point(lambda v: 255 * (v < 6)).histogram()[255] / (m.width * m.height)
            if void > .02:
                continue
            manifest[job] = {"srcset": save(f"job_{job}", tint(image, m, 3)), "source": f"OpenEarthMap · {city}", "frac": round(frac, 3)}
            used.add(city)
            break

print(json.dumps(manifest, indent=1))
