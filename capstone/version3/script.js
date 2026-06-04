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
    const dogenResponse = document.querySelector('#responsebox-d')
    const dogenDialogue = document.querySelectorAll('#dogen-intro p')
    const dogenNext = document.querySelector('#dogen-next');
    const dogenReturn = document.querySelector('#dogen-return');

    // const granimInstance = new Granim({
    //     element: '#canvas-basic',
    //     direction: 'top-bottom',
    //     isPausedWhenNotInView: true,
    //     states: {
    //         "default-state": {
    //             gradients: [
    //                 ['#59c1bf', '#EEE5C2'],
    //                 ['#61F3C4', '#336771'],
    //                 ['#F9ABFF', '#472773']
    //             ]
    //         }
    //     }
    // });

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
        if (selectedCity === 'maldives') {
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
            document.querySelector('#dogen-intro').className = 'showing';
            currentDialogue = dogenDialogue;
            dogenNext.className = 'showing'
            dogenReturn.className = 'hidden'
            changeText(dialogueCount, currentDialogue, dogenResponse);
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

    document.querySelector('#m1').addEventListener('click', function () {
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

    document.querySelector('#m2').addEventListener('click', function () {
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

    document.querySelector('#m3').addEventListener('click', function () {
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

    document.querySelector('#m4').addEventListener('click', function () {
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

    document.querySelector('#o1').addEventListener('click', function () {
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

    document.querySelector('#o2').addEventListener('click', function () {
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

    document.querySelector('#o3').addEventListener('click', function () {
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

    document.querySelector('#o4').addEventListener('click', function () {
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

    // Dogen
    document.querySelector('#dogen-next').addEventListener('click', function () {
        dialogueCount++
        changeText(dialogueCount, currentDialogue, dogenResponse);
    })

    document.querySelector('#d1').addEventListener('click', function () {
        dialogueCount = 0;
        document.querySelector('#dogen-intro').className = 'hidden'
        document.querySelectorAll('#dogen-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#dogen-q1').className = 'showing'
        const md = document.querySelectorAll('#dogen-q1 p');
        currentDialogue = md;
        changeText(dialogueCount, currentDialogue, dogenResponse)
    })

    document.querySelector('#d2').addEventListener('click', function () {
        dialogueCount = 0;
        document.querySelector('#dogen-intro').className = 'hidden'
        document.querySelectorAll('#dogen-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#dogen-q2').className = 'showing'
        const md = document.querySelectorAll('#dogen-q2 p');
        currentDialogue = md;
        changeText(dialogueCount, currentDialogue, dogenResponse)
    })

    document.querySelector('#d3').addEventListener('click', function () {
        dialogueCount = 0;
        document.querySelector('#dogen-intro').className = 'hidden'
        document.querySelectorAll('#dogen-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#dogen-q3').className = 'showing'
        const md = document.querySelectorAll('#dogen-q3 p');
        currentDialogue = md;
        changeText(dialogueCount, currentDialogue, dogenResponse)
    })

    document.querySelector('#d4').addEventListener('click', function () {
        dialogueCount = 0;
        document.querySelector('#dogen-intro').className = 'hidden'
        document.querySelectorAll('#dogen-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#dogen-q4').className = 'showing';
        document.querySelector('#dogen-q4 p').className = 'showing'
        dogenNext.className = 'hidden';
        dogenReturn.className = 'showing';
    })


    function changeText(dialogueCount, text, response) {
        if (dialogueCount <= text.length - 1) {
            response.className = 'response hidden'
            text.forEach(element => {
                element.className = 'hidden'
            });
            text[dialogueCount].className = 'showing'
        } else if (dialogueCount > text.length - 1) {
            response.className = 'response';
        }

    }

    returnBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('section').forEach(element => {
                element.className = 'hidden';
            });
            locationSel.className = 'showing';
            doneBtn.className = 'showing'
        })
    });

    doneBtn.addEventListener('click', function () {
        locationSel.className = 'hidden';
        choose.className = 'showing';
    })

    document.querySelector('#choose form').addEventListener('submit', function (event) {
        event.preventDefault();
        document.querySelector('#choose h2').innerHTML = 'You made your choice! Work in progress :P Reload to restart'
    })


    // backBtn.forEach(element => {
    //     element.addEventListener('click', function {

    //     })
    // });

    // for usability test
    // closeBtn.addEventListener('click', function(){
    //     overlay.className = 'overlay hidden';
    // })

    particlesJS("particles-js", {
        particles: {
            number: { value: 38, density: { enable: true, value_area: 800 } },
            color: { value: "#c6c9de" },
            shape: {
                type: "circle",
                stroke: { width: 2, color: "#969eb8" },
                polygon: { nb_sides: 6 },
                image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
                value: 0.3,
                random: true,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 47.980807676929246,
                random: true,
                anim: { enable: true, speed: 10, size_min: 40, sync: false }
            },
            line_linked: {
                enable: false,
                distance: 200,
                color: "#ffffff",
                opacity: 1,
                width: 2
            },
            move: {
                enable: true,
                speed: 5,
                direction: "top",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: false, mode: "grab" },
                onclick: { enable: false, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });
    var count_particles, stats, update;
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector(".js-count-particles");
    update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);



})();