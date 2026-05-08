(function() {
    var btn = document.getElementById('back-to-top');
    if (btn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        }, { passive: true });
        btn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    var targets = document.querySelectorAll(
        '.work-world-concept, .work-world-features, .work-world-faq, .feature-card, .faq-item'
    );
    targets.forEach(function(el) {
        el.classList.add('fade-in-section');
    });

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        targets.forEach(function(el) {
            observer.observe(el);
        });
    } else {
        targets.forEach(function(el) { el.classList.add('is-visible'); });
    }
})();
