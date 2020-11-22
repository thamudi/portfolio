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

    if(eventClassName.includes('scroll-able') || eventClassName.includes('sub-title')){
        console.log(`Inner Height ${event.target.innerHeight}`);
        console.log(`Scroll Y ${event.target.scrollY}`);
        console.log(`Off set Height ${event.target.offsetHeight}`);
        // console.log(`X: ${event.deltaX}`);
        // console.log(`Y: ${event.deltaY}`);

    }
}

/** 
 *  --------------------
 *  - Render Functions -
 *  --------------------
*/

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
