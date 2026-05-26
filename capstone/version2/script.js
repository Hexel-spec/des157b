(function(){
    'use strict';
    console.log('reading js');

    const body = document.querySelector('body');
    const startBtn = document.querySelector('#start');
    const backstoryNext = document.querySelector('#backstory-next')
    const onboardingNext = document.querySelector('#onboarding-next')
    const backBtn = document.querySelectorAll('.back')
    const goBtn = document.querySelector('#go');
    const cancelBtn = document.querySelector('#cancel')
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
    const pin1 = document.querySelector('#pin1');
    const pin2 = document.querySelector('#pin2');
    const pin3 = document.querySelector('#pin3');
    // const popup1 = document.querySelector('#popup1');
    // const popup2 = document.querySelector('#popup2');
    // const popup3 = document.querySelector('#popup3');
    const mapHeader = document.querySelector('#location-select h2')

    startBtn.addEventListener('click', function(){
        startPage.className = 'hidden';
        backstory.className = 'showing';
        b1.className = 'showing';
        body.style.backgroundColor = 'rgb(48, 58, 60)'
        body.style.backgroundImage = 'none'
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
                locationSel.className = 'showing';
            }
        })

    onboardingNext.addEventListener('click', function(){
        onboarding.className = 'hidden';
    })

    // Maybe clean this up later
    // pin1.addEventListener('mouseover', function(){
    //     popup1.className = 'popup showing'
    // })
    // pin2.addEventListener('mouseover', function(){
    //     popup2.className = 'popup showing'
    // })
    // pin3.addEventListener('mouseover', function(){
    //     popup3.className = 'popup showing'
    // })
    // pin1.addEventListener('mouseout', function(){
    //     popup1.className = 'popup hidden'
    // })
    // pin2.addEventListener('mouseout', function(){
    //     popup2.className = 'popup hidden'
    // })
    // pin3.addEventListener('mouseout', function(){
    //     popup3.className = 'popup hidden'
    // })


    pin1.addEventListener('click', function(){
        mapHeader.innerHTML = 'Would you like to travel to <strong>Maldives Floating City?</strong>'
        goBtn.className = 'showing'
        cancelBtn.className = 'showing'
    })

    pin2.addEventListener('click', function(){
        mapHeader.innerHTML = 'Would you like to travel to <strong>Oceanix Busan?</strong>'
        goBtn.className = 'showing'
        cancelBtn.className = 'showing'
    })

    pin3.addEventListener('click', function(){
        mapHeader.innerHTML = 'Would you like to travel to  <strong>Dogen City?</strong>'
        goBtn.className = 'showing'
        cancelBtn.className = 'showing'        
    })

    cancelBtn.addEventListener('click', function(){
        mapHeader.innerHTML = 'Choose a floating city to explore!'
        goBtn.className = 'hidden'
        cancelBtn.className = 'hidden'
    })


    // backBtn.forEach(element => {
    //     element.addEventListener('click', function {
            
    //     })
    // });

})();