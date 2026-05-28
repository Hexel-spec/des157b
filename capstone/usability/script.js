(function () {
    'use strict';
    console.log('reading js');

    //for usability test
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('#close');

    const body = document.querySelector('body');
    const startBtn = document.querySelector('#start');
    const backstoryNext = document.querySelector('#backstory-next')
    const onboardingNext = document.querySelector('#onboarding-next')
    const backBtn = document.querySelectorAll('.back')
    const goBtn = document.querySelector('#go');
    const cancelBtn = document.querySelector('#cancel');
    const doneBtn = document.querySelector('#done')
    const returnBtns = document.querySelectorAll('.return')
    const startPage = document.querySelector('header');
    const backstory = document.querySelector('#backstory');
    const onboarding = document.querySelector('#onboarding');
    const locationSel = document.querySelector('#location-select');
    const maldives = document.querySelector('#maldives');
    const oceanix = document.querySelector('#oceanix');
    const dogen = document.querySelector('#dogen')
    const choose = document.querySelector('#choose')
    const b1 = document.querySelector('#b1');
    const b2 = document.querySelector('#b2');
    const b3 = document.querySelector('#b3');
    const pin1 = document.querySelector('#pin1');
    const pin2 = document.querySelector('#pin2');
    const pin3 = document.querySelector('#pin3');
    let dialogueCount = 0;
    // const popup1 = document.querySelector('#popup1');
    // const popup2 = document.querySelector('#popup2');
    // const popup3 = document.querySelector('#popup3');
    const mapHeader = document.querySelector('#location-select h2');
    let selectedCity = 'none';
    let currentDialogue = [];


    //Maldives dialogue
    const maldivesResponse = document.querySelector('#responsebox-m')
    const maldivesDialogue = document.querySelectorAll('#maldives-intro p')
    const maldivesNext = document.querySelector('#maldives-next');
    const maldivesReturn = document.querySelector('#maldives-return');

    //Oceanix dialogue
    const oceanixResponse = document.querySelector('#responsebox-o')
    const oceanixDialogue = document.querySelectorAll('#oceanix-intro p')
    const oceanixNext = document.querySelector('#oceanix-next');
    const oceanixReturn = document.querySelector('#oceanix-return');

    //Dogen dialogue
    const dogenReturn = document.querySelector('#dogen-return');

    startBtn.addEventListener('click', function () {
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

    backstoryNext.addEventListener('click', function () {
        if (b1.className === 'showing') {
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

    onboardingNext.addEventListener('click', function () {
        onboarding.className = 'hidden';
        doneBtn.className = 'showing'
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


    pin1.addEventListener('click', function () {
        mapHeader.innerHTML = 'Would you like to travel to <strong>Maldives Floating City?</strong>'
        goBtn.className = 'showing'
        cancelBtn.className = 'showing'
        doneBtn.className = 'hidden'
        selectedCity = 'maldives'
    })

    pin2.addEventListener('click', function () {
        mapHeader.innerHTML = 'Would you like to travel to <strong>Oceanix Busan?</strong>'
        goBtn.className = 'showing'
        cancelBtn.className = 'showing'
        doneBtn.className = 'hidden'
        selectedCity = 'oceanix'
    })

    pin3.addEventListener('click', function () {
        mapHeader.innerHTML = 'Would you like to travel to  <strong>Dogen City?</strong>'
        goBtn.className = 'showing'
        cancelBtn.className = 'showing'
        doneBtn.className = 'hidden'
        selectedCity = 'dogen'
    })

    cancelBtn.addEventListener('click', function () {
        mapHeader.innerHTML = 'Choose a floating city to explore!'
        goBtn.className = 'hidden'
        cancelBtn.className = 'hidden'
        doneBtn.className = 'showing'
        selectedCity = 'none';
    })

    goBtn.addEventListener('click', function () {
        if (selectedCity ===  'maldives') {
            locationSel.className = 'hidden';
            maldives.className = 'showing';
            document.querySelector('#maldives-intro').className = 'showing';
            currentDialogue = maldivesDialogue;
            maldivesNext.className = 'showing'
            maldivesReturn.className = 'hidden'
            changeText(dialogueCount, currentDialogue, maldivesResponse);
        } else if (selectedCity === 'oceanix') {
            locationSel.className = 'hidden';
            oceanix.className = 'showing';
            document.querySelector('#oceanix-intro').className = 'showing';
            currentDialogue = oceanixDialogue;
            oceanixNext.className = 'showing'
            oceanixReturn.className = 'hidden'
            changeText(dialogueCount, currentDialogue, oceanixResponse);
        } else if (selectedCity === 'dogen') {
            locationSel.className = 'hidden'
            dogen.className = 'showing';
        }
        mapHeader.innerHTML = 'Choose a floating city to explore!'
        goBtn.className = 'hidden'
        cancelBtn.className = 'hidden'
    })


    // Maldives

    document.querySelector('#maldives-next').addEventListener('click', function () {
        dialogueCount++
        changeText(dialogueCount, currentDialogue, maldivesResponse);
    })

    document.querySelector('#m1').addEventListener('click', function(){
        dialogueCount = 0;
        document.querySelector('#maldives-intro').className = 'hidden'
        document.querySelectorAll('#maldives-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#maldives-q1').className = 'showing'
        const md = document.querySelectorAll('#maldives-q1 p');
        currentDialogue = md;
        changeText(dialogueCount, currentDialogue, maldivesResponse)
    })

    document.querySelector('#m2').addEventListener('click', function(){
        dialogueCount = 0;
        document.querySelector('#maldives-intro').className = 'hidden'
        document.querySelectorAll('#maldives-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#maldives-q2').className = 'showing'
        const md = document.querySelectorAll('#maldives-q2 p');
        currentDialogue = md;
        changeText(dialogueCount, currentDialogue, maldivesResponse)
    })

    document.querySelector('#m3').addEventListener('click', function(){
        dialogueCount = 0;
        document.querySelector('#maldives-intro').className = 'hidden'
        document.querySelectorAll('#maldives-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#maldives-q3').className = 'showing'
        const md = document.querySelectorAll('#maldives-q3 p');
        currentDialogue = md;
        changeText(dialogueCount, currentDialogue, maldivesResponse)
    })

    document.querySelector('#m4').addEventListener('click', function(){
        dialogueCount = 0;
        document.querySelector('#maldives-intro').className = 'hidden'
        document.querySelectorAll('#maldives-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#maldives-q4').className = 'showing';
        document.querySelector('#maldives-q4 p').className = 'showing'
        maldivesNext.className = 'hidden';
        maldivesReturn.className = 'showing';
        

    })

    // Oceanix
    document.querySelector('#oceanix-next').addEventListener('click', function () {
        dialogueCount++
        changeText(dialogueCount, currentDialogue, oceanixResponse);
    })

    document.querySelector('#o1').addEventListener('click', function(){
        dialogueCount = 0;
        document.querySelector('#oceanix-intro').className = 'hidden'
        document.querySelectorAll('#oceanix-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#oceanix-q1').className = 'showing'
        const md = document.querySelectorAll('#oceanix-q1 p');
        currentDialogue = md;
        changeText(dialogueCount, currentDialogue, oceanixResponse)
    })

    document.querySelector('#o2').addEventListener('click', function(){
        dialogueCount = 0;
        document.querySelector('#oceanix-intro').className = 'hidden'
        document.querySelectorAll('#oceanix-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#oceanix-q2').className = 'showing'
        const md = document.querySelectorAll('#oceanix-q2 p');
        currentDialogue = md;
        changeText(dialogueCount, currentDialogue, oceanixResponse)
    })

    document.querySelector('#o3').addEventListener('click', function(){
        dialogueCount = 0;
        document.querySelector('#oceanix-intro').className = 'hidden'
        document.querySelectorAll('#oceanix-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#oceanix-q3').className = 'showing'
        const md = document.querySelectorAll('#oceanix-q3 p');
        currentDialogue = md;
        changeText(dialogueCount, currentDialogue, oceanixResponse)
    })

    document.querySelector('#o4').addEventListener('click', function(){
        dialogueCount = 0;
        document.querySelector('#oceanix-intro').className = 'hidden'
        document.querySelectorAll('#oceanix-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#oceanix-q4').className = 'showing';
        document.querySelector('#oceanix-q4 p').className = 'showing'
        oceanixNext.className = 'hidden';
        oceanixReturn.className = 'showing';
    })


    function changeText(dialogueCount, text, response) {
        if (dialogueCount <= text.length-1) {
            response.className = 'response hidden'
            text.forEach(element => {
                element.className = 'hidden'
            });
            text[dialogueCount].className = 'showing'
        } else if (dialogueCount > text.length-1) {
            response.className = 'response';
        }

    }

    returnBtns.forEach(btn => {
        btn.addEventListener('click', function(){
            document.querySelectorAll('section').forEach(element => {
                element.className = 'hidden';
            });
            locationSel.className = 'showing';
        })
    });

    doneBtn.addEventListener('click', function(){
        locationSel.className = 'hidden';
        choose.className = 'showing';
    })

    document.querySelector('#choose form').addEventListener('submit', function(event){
        event.preventDefault();
        document.querySelector('#choose h2').innerHTML = 'You made your choice! Work in progress :P Reload to restart'
    })


    // backBtn.forEach(element => {
    //     element.addEventListener('click', function {

    //     })
    // });

    // for usability test
    closeBtn.addEventListener('click', function(){
        overlay.className = 'overlay hidden';
    })
    

})();