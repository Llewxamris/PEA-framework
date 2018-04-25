(() => {
    document.addEventListener('DOMContentLoaded', () => {
        /* Gets the hamburger, and shows the nav on click. */
        const navBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        if (navBurgers.length != 0) {
            navBurgers.forEach((el) => {
                el.addEventListener('click', () => {
                    const target = el.dataset.target;
                    const targetElement = document.getElementById(target);

                    el.classList.toggle('is-active');
                    targetElement.classList.toggle('is-active');
                });
            });
        }
    });

    document.querySelectorAll('#navMenu').forEach((el) => {
        /* Closes the hamburger menu. */
        el.addEventListener('click', () => {
            el.classList.toggle('is-active');
            document.querySelector('.navbar-burger').classList.toggle('is-active');
        });
    });

    document.addEventListener('scroll', () => {
        /* Shows/hides the jump button based on page position. */
        const jumpBtn = document.querySelector('#jumpButton');

        if (window.scrollY > 200) {
            jumpBtn.classList.add('show');
            jumpBtn.classList.remove('hide');
        } else {
            jumpBtn.classList.add('hide');
            jumpBtn.classList.remove('show');
        }
    });

    document.querySelector('#jumpButton').addEventListener('click', () => {
        /* Jump button functionality. */
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    document.querySelectorAll('section a').forEach(el => {
        if (el.id !== 'jumpButton') {
            const spanTag = document.createElement('span');
            const iTag = document.createElement('i');

            iTag.classList.add('fas');
            iTag.classList.add('fa-download');
            iTag.classList.add('fa-lg');

            spanTag.classList.add('icon');
            spanTag.classList.add('is-medium');
            spanTag.appendChild(iTag);

            el.insertBefore(spanTag, el.firstChild);
        }
    });
})();
