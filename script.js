(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            banner.innerHTML = '<img src="images/home-is-banner-childhood.JPG" alt="childhood home" width="1100" height="250">';
            button.className = 'switch';
            button.innerHTML = '<img src="images/switch-button-pen.png" alt="switch button" width="50" height="50">';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            banner.innerHTML = '<img src="images/home-is-banner-modern.png" alt="modern home" width="1100" height="250">';
            button.removeAttribute('class');
            button.innerHTML = '<img src="images/switch-button-crayon.png" alt="switch button" width="50" height="50">';
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()