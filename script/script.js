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

const iseeyou = (title, subtitle) => {
    const t = document.getElementById('hTitle');
    const s = document.getElementById('sTitle');

    t.innerText = title;
    s.innerText = subtitle;
};

setInterval(() => {
    // I blame Richard Chan for having to make this code chunk
    if (prevHash !== location.hash) {
        switch (location.hash) {
        case '#process':
            peekaboo('process');
            iseeyou('Process', 'Fun Subtitle!');
            break;
        case '#teamEnvironment':
            peekaboo('teamEnvironment');
            iseeyou('Team Environment', 'Fun Subtitle!');
            break;
        case '#projectManagement':
            peProcessekaboo('projectManagement');
            iseeyou('Project Management', 'Fun Subtitle!');
            break;
        case '#requirements':
            peekaboo('requirements');
            iseeyou('Requirements', 'Fun Subtitle!');
            break;
        case '#analysis':
            peekaboo('analysis');
            iseeyou('Analysis', 'Fun Subtitle!');
            break;
        case '#design':
            peekaboo('design') ;
            iseeyou('Design', 'Fun Subtitle!');
            break;
        case '#implementation':
            peekaboo('implementation');
            iseeyou('Implementation', 'Fun Subtitle!');
            break;
        case '#test':
            peekaboo('test');
            iseeyou('Test', 'Fun Subtitle!');
            break;
        case '#deployment':
            peekaboo('deployment');
            iseeyou('Deployment', 'Fun Subtitle!');
            break;
        case '#training':
            peekaboo('training');
            iseeyou('Training', 'Fun Subtitle!');
            break;
        case '#maintenance':
            peekaboo('maintenance');
            iseeyou('Maintenance', 'Fun Subtitle!');
            break;
        case '#communications':
            peekaboo('communications');
            iseeyou('Communications', 'Fun Subtitle!');
            break;
        default:
        }

        prevHash = location.hash;
    }
}, 5);
