const para = document.getElementById('mainContainer').getElementsByTagName('p');
let prevHash = '';

document.addEventListener('DOMContentLoaded', () => {
    /* Gets the hamburger, and shows/hides the nav on click. */
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

const hideAllExcept = (id) => {
    /* Add the hidden class to all memebers of para except for the one specified
       in the parameter. */
    // Create an iterator for the HTMLCollection collection type. Needed for
    // the latter `for x of y` loop.
    HTMLCollection.prototype[Symbol.iterator] = Array.
        prototype[Symbol.iterator];

    for (let el of para) {
        if(el.id === id) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    }
};

const setTitle = (title) => {
    /* Sets the Hero sections tilte and subtitle to those passed in. */
    const t = document.getElementById('hTitle');

    t.innerHTML = title;
};

setInterval(() => {
    // I blame Richard Chan for having to make this switch statement.
    const rightChev = `<span class="icon is-medium"><i class="fa fa-angle-double-right">
            </i></span>`;

    if (prevHash !== location.hash) {
        switch (location.hash) {
        case '#home':
            hideAllExcept('home');
            setTitle('Home');
            break;
        case '#process':
            hideAllExcept('process');
            setTitle(`Initiation ${rightChev} Process`);
            break;
        case '#teamEnvironment':
            hideAllExcept('teamEnvironment');
            setTitle(`Initiation ${rightChev} Team Environment`);
            break;
        case '#projectManagement':
            hideAllExcept('projectManagement');
            setTitle(`Initiation ${rightChev} Project Management`);
            break;
        case '#requirements':
            hideAllExcept('requirements');
            setTitle(`Construction ${rightChev} Requirements`);
            break;
        case '#analysis':
            hideAllExcept('analysis');
            setTitle(`Construction ${rightChev} Analysis`);
            break;
        case '#design':
            hideAllExcept('design') ;
            setTitle(`Construction ${rightChev} Design`);
            break;
        case '#implementation':
            hideAllExcept('implementation');
            setTitle(`Construction ${rightChev} Implementation`);
            break;
        case '#test':
            hideAllExcept('test');
            setTitle(`Construction ${rightChev} Test`);
            break;
        case '#deployment':
            hideAllExcept('deployment');
            setTitle(`Release ${rightChev} Deployment`);
            break;
        case '#training':
            hideAllExcept('training');
            setTitle(`Release ${rightChev} Training`);
            break;
        case '#maintenance':
            hideAllExcept('maintenance');
            setTitle('Maintenance');
            break;
        case '#communications':
            hideAllExcept('communications');
            setTitle('Communications');
            break;
        default:
            hideAllExcept('404');
            setTitle('404 - Page Not Found!');
        }

        prevHash = location.hash;
    }
}, 5);
