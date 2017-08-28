HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
const para = document.getElementById('mainContainer').getElementsByTagName('p');
let prevHash = '';

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

const peekaboo = (id) => {
    for (let el of para) {
        if(el.id === id) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    }
};

setInterval(() => {
    // I blame Richard Chan for having to make this code chunk
    if (prevHash !== location.hash) {
        switch (location.hash) {
        case '#process':
            peekaboo('process');
            break;
        case '#teamEnvironment':
            peekaboo('teamEnvironment');
            break;
        case '#projectManagement':
            peekaboo('projectManagement');
            break;
        case '#requirements':
            peekaboo('requirements');
            break;
        case '#analysis':
            peekaboo('analysis');
            break;
        case '#design':
            peekaboo('design') ;
            break;
        case '#implementation':
            peekaboo('implementation');
            break;
        case '#test':
            peekaboo('test');
            break;
        case '#deployment':
            peekaboo('deployment');
            break;
        case '#training':
            peekaboo('training');
            break;
        case '#maintenance':
            peekaboo('maintenance');
            break;
        case '#communications':
            peekaboo('communications');
            break;
        default:
        }

        prevHash = location.hash;
    }
}, 5);
