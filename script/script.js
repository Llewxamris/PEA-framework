HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

document.addEventListener('DOMContentLoaded', () => {
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

const para = document.getElementById('mainContainer').getElementsByTagName('p');
let prevHash = '';

console.log(para);

const peekaboo = (id) => {
    for (let el of para) {
        if(el.id === id) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    }
}

setInterval(() => {
    if (prevHash !== location.hash) {
        if (location.hash === '#process') {
            peekaboo('process');
        }
        if (location.hash === '#teamEnvironment') {
            peekaboo('teamEnvironment');
        }
        prevHash = location.hash;
    }
}, 500);
