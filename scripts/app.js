'use strict'

/** 
 *  -----------------------------
 *  - Event Listeners Functions -
 *  -----------------------------
*/

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

function showInfo(event) {
    const paths = event.path;
    // console.log(paths);
    paths.forEach(path => {
        
        if (path.className) {

            // if(path.className.includes('info')){
            //     console.log(path.children);
            //     const child = path.children[0];
            //     child.classList.toggle('active');
            // }

            if(path.className.includes('active') && path.className.includes('slide')){
                path.classList.toggle('overlay');
            }
    
            if(path.className.includes('intro')){
    
                // not working ??
                // path.children.forEach(child => {
                //     console.log(child);
                // });
                const child = path.children[1];
                child.classList.toggle('z-in-show');
            }
        }

    });


    
}

function sendMail(event) {
    event.preventDefault();
    
}

/** 
 *  --------------------
 *  - Render Functions -
 *  --------------------
*/


/** 
 *  -------------------
 *  - Event listeners -
 *  -------------------
*/

document.getElementById('contact-me').addEventListener('submit', sendMail)
