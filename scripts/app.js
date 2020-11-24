'use strict'

/** 
 *  -----------------------------
 *  - Event Listeners Functions -
 *  -----------------------------
*/

function checkNavItem(event) {
    const navIdList = ['main-nav', 'work-nav', 'about-nav', 'contact-nav']
    const navId = event.target.id;

    if (navIdList.includes(navId)) {
        renderSection(navId);
    }
}

function scroll(event) {

    const eventClassName = event.target.className;

    if (eventClassName.includes('scroll-able') || eventClassName.includes('sub-title')) {
        // get the scroll-able section
        const scrollAble = event.path[0].className.includes('scroll-able') ? event.path[0] : event.path[1];
        if (Math.ceil(scrollAble.scrollHeight - scrollAble.scrollTop) === scrollAble.clientHeight) {
            // get the parent container
            const parentNodeSection = event.path[1].className.includes('section') ? event.path[1] : event.path[2];
            const section = document.getElementById(parentNodeSection.id);
            // reset the scroll
            // this section hide
            section.classList.add('visually-hidden');
            section.addEventListener('transitionend', function (e) {
                scrollAble.scrollTop = 0;
                section.classList.add('hide');
                // display the next section
                checkSectionType(parentNodeSection.id);
            }, {
                capture: false,
                once: true,
                passive: false
            });
        }

    }
}

/** 
 *  --------------------
 *  - Render Functions -
 *  --------------------
*/

function checkSectionType(sectionId, scrollType = 'bottom') {
    switch (sectionId) {
        case 'main':
            if (scrollType === 'bottom') {
                document.getElementById('work').classList.remove('hide');
                setTimeout(function () {
                    document.getElementById('main').classList.remove('visually-hidden');
                }, 20);
            }

            break;
        case 'work':

            if (scrollType === 'bottom') {
                document.getElementById('about').classList.remove('hide');
                setTimeout(function () {
                    document.getElementById('work').classList.remove('visually-hidden');
                }, 20);
            }

            break;

        case 'about':

            if (scrollType === 'bottom') {
                document.getElementById('contact').classList.remove('hide');
                setTimeout(function () {
                    document.getElementById('about').classList.remove('visually-hidden');
                }, 20);
            }

            break;
        case 'contact':
            if (scrollType === 'bottom') {
                document.getElementById('main').classList.remove('hide');
                setTimeout(function () {
                    document.getElementById('contact').classList.remove('visually-hidden');
                }, 20);
            }
            break;

        default:
            break;
    }
}

function renderSection(navId) {
    const targetId = navId.split('-')[0];
    document.querySelectorAll('.section').forEach(element => {
        element.classList.add('hide');
    });
    document.getElementById(targetId).classList.remove('hide');

}

/** 
 *  -------------------
 *  - Event listeners -
 *  -------------------
*/
document.getElementById('nav').addEventListener('click', checkNavItem);
document.getElementById('content').addEventListener('wheel', scroll);
