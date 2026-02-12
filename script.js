(function () {
    'use strict';

    const openButtons = document.querySelectorAll('.open');
    const closeButtons = document.querySelectorAll('.close');
    const overlays = document.querySelectorAll('section[id^="overlay"]');

    // OPEN OVERLAY
    openButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const overlayId = this.dataset.overlay;
            const overlay = document.getElementById(overlayId);

            if (overlay) {
                overlay.classList.remove('hidden');
                overlay.classList.add('showing');
            }
        });
    });

    // CLOSE OVERLAY (close button)
    closeButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const overlay = this.closest('section');
            overlay.classList.remove('showing');
            overlay.classList.add('hidden');
        });
    });

    // CLOSE WITH ESC KEY
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            overlays.forEach(overlay => {
                overlay.classList.remove('showing');
                overlay.classList.add('hidden');
            });
        }
    });
})();