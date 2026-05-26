(function(){
    'use strict';
    console.log('reading js');

    const startBtn = document.querySelector('#start');
    const backstoryNext = document.querySelector('#backstory-next')
    const startPage = document.querySelector('header');
    const backstory = document.querySelector('#backstory');
    const onboarding = document.querySelector('#onboarding');
    const locationSel = document.querySelector('#location-select');
    const maldives = document.querySelector('#maldives');
    const oceanix = document.querySelector('#oceanix');
    const dogen = document.querySelector('#dogen')
    const b1 = document.querySelector('#b1');
    const b2 = document.querySelector('#b2');
    const b3 = document.querySelector('#b3');
    // change this later
    const textbox = document.querySelector('#onboarding-textbox')
    const pin1 = document.querySelector('#pin1');
    const pin2 = document.querySelector('#pin2');
    const pin3 = document.querySelector('#pin3');

    startBtn.addEventListener('click', function(){
        startPage.className = 'hidden';
        backstory.className = 'showing';
        b1.className = 'showing';
    })

    // if (backstory.className === 'showing') {
    //     window.addEventListener('click', function(){
    //         if(b1.className === 'showing'){
    //             b1.className = 'hidden';
    //             b2.className = 'showing';
    //         } else if (b2.className === 'showing') {
    //             b2.className = 'hidden';
    //             b3.className = 'showing';
    //         } else {
    //             backstory.className = 'hidden'
    //             onboarding.className = 'showing'
    //         }
    //     })
    // }

    backstoryNext.addEventListener('click', function(){
            if(b1.className === 'showing'){
                b1.className = 'hidden';
                b2.className = 'showing';
            } else if (b2.className === 'showing') {
                b2.className = 'hidden';
                b3.className = 'showing';
            } else {
                backstory.className = 'hidden'
                onboarding.className = 'showing'
            }
        })

    textbox.addEventListener('click', function(){
        onboarding.className = 'hidden';
        locationSel.className = 'showing';
    })

    pin1.addEventListener('mouseover', function(){
        d
    })

})();