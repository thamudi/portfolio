'use strict'

function checkNavItem(event) {
    const navIdList = ['main-nav', 'work-nav', 'about-nav', 'contact-nav']
    const navId = event.target.id;
    
    if (navIdList.includes(navId)) {
        renderSection(navId);
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