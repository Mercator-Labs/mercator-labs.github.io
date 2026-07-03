const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('reveal-ready');
    const io = new IntersectionObserver(entries => entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('visible');
        io.unobserve(e.target);
    }), { threshold: 0.08 });
    $$('.reveal').forEach(el => {
        if (el.getBoundingClientRect().bottom < 0) el.classList.add('visible');
        else io.observe(el);
    });
} else {
    $$('.reveal').forEach(el => el.classList.add('visible'));
}

{
    const nav = $('nav');
    let lastY = 0;
    addEventListener('scroll', () => {
        nav.classList.toggle('nav-hidden', scrollY > 80 && scrollY > lastY);
        lastY = scrollY;
    }, { passive: true });
}

{
    const stage = $('.slider-stage');
    const hint = $('.slider-hint');
    let pct = 50;
    let dragging = false;
    let touch = null;

    const set = value => {
        pct = Math.max(2, Math.min(98, value));
        stage.style.setProperty('--slider-pct', pct + '%');
        stage.setAttribute('aria-valuenow', Math.round(pct));
        stage.setAttribute('aria-valuetext', Math.round(pct) + '% predictions visible');
    };
    const setFromX = x => {
        const rect = stage.getBoundingClientRect();
        set((x - rect.left) / rect.width * 100);
    };
    const begin = e => {
        dragging = true;
        stage.classList.add('is-dragging');
        stage.setPointerCapture(e.pointerId);
        hint.classList.add('seen');
    };
    const reset = () => {
        dragging = false;
        touch = null;
        stage.classList.remove('is-dragging');
    };

    stage.addEventListener('pointerdown', e => {
        if (e.pointerType === 'touch') {
            touch = { x: e.clientX, y: e.clientY };
            return;
        }
        begin(e);
        setFromX(e.clientX);
        e.preventDefault();
    });
    stage.addEventListener('pointermove', e => {
        if (dragging) return setFromX(e.clientX);
        if (!touch) return;
        const dx = e.clientX - touch.x;
        const dy = e.clientY - touch.y;
        if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
            begin(e);
            setFromX(e.clientX);
        } else if (Math.abs(dy) > 8) {
            touch = null;
        }
    });
    stage.addEventListener('pointerup', e => {
        if (touch && !dragging) {
            setFromX(e.clientX);
            hint.classList.add('seen');
        }
        reset();
    });
    stage.addEventListener('pointercancel', reset);
    stage.addEventListener('keydown', e => {
        const step = e.shiftKey ? 10 : 4;
        const moves = { ArrowLeft: pct - step, ArrowDown: pct - step, ArrowRight: pct + step, ArrowUp: pct + step, Home: 2, End: 98 };
        if (e.key in moves) {
            set(moves[e.key]);
            hint.classList.add('seen');
            e.preventDefault();
        }
    });
    set(pct);
}

if ('IntersectionObserver' in window) {
    const navLinks = $$('.nav-links a');
    const targets = navLinks.map(a => $(a.hash)).filter(Boolean);
    const spy = new IntersectionObserver(() => {
        const line = innerHeight * .4;
        let active = -1;
        targets.forEach((t, i) => { if (t.getBoundingClientRect().top <= line) active = i; });
        navLinks.forEach((a, i) => a.classList.toggle('active', i === active));
    }, { rootMargin: '-10% 0px -50% 0px' });
    targets.forEach(t => spy.observe(t));
}

if ('IntersectionObserver' in window) {
    const links = $$('.rail-link');
    const jobs = $$('.job');
    const spy = new IntersectionObserver(() => {
        const line = innerHeight * .35;
        let active = 0;
        jobs.forEach((job, i) => { if (job.getBoundingClientRect().top <= line) active = i; });
        links.forEach((link, j) => link.classList.toggle('active', j === active));
    }, { rootMargin: '-10% 0px -55% 0px' });
    jobs.forEach(job => spy.observe(job));
}

{
    const btn = $('.nav-toggle');
    const menu = $('.mobile-nav');
    const links = $$('.mobile-nav-link', menu);
    const isOpen = () => btn.getAttribute('aria-expanded') === 'true';

    const setOpen = open => {
        menu.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open);
        menu.setAttribute('aria-hidden', !open);
        document.body.style.overflow = open ? 'hidden' : '';
        if (open) links[0].focus();
    };

    btn.addEventListener('click', () => setOpen(!isOpen()));
    links.forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', e => {
        if (!isOpen()) return;
        if (e.key === 'Escape') {
            setOpen(false);
            btn.focus();
        }
        if (e.key === 'Tab') {
            e.preventDefault();
            const order = [btn, ...links];
            const i = order.indexOf(document.activeElement);
            order[(i + (e.shiftKey ? -1 : 1) + order.length) % order.length].focus();
        }
    });
}

{
    const copy = $('[data-copy-email]');
    const status = $('.contact-status');
    const email = copy.dataset.copyEmail;
    const fallback = () => { status.textContent = 'Email address: ' + email; };

    copy.addEventListener('click', () => {
        if (!navigator.clipboard) return fallback();
        navigator.clipboard.writeText(email).then(() => {
            status.textContent = 'Email copied.';
            copy.textContent = 'Copied';
            copy.classList.add('copied');
            setTimeout(() => {
                copy.textContent = 'Copy Email';
                copy.classList.remove('copied');
                status.textContent = '';
            }, 2200);
        }, fallback);
    });
}
