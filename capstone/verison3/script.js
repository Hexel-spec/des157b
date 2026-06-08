(function () {
    'use strict'
    console.log('reading js');

    const startBtn = document.querySelector('#start');
    const header = document.querySelector('header')
    const box = document.querySelector('#box')
    const onboarding = document.querySelector('#onboarding');
    const onboardingTextbox = document.querySelector('#onboarding .textbox');
    const locationSel = document.querySelector('#location-select');
    let dialogueCount = 0;
    let currentDialogue;
    const maldives = document.querySelector('#maldives');
    const oceanix = document.querySelector('#oceanix');
    const dogen = document.querySelector('#dogen')
    const maldivesTextbox = document.querySelector('#maldives .textbox');
    const maldivesResponse = document.querySelector('#maldives .response');
    const maldivesMouse = document.querySelector('#maldives .fa-computer-mouse')
    const oceanixTextbox = document.querySelector('#oceanix .textbox');
    const oceanixResponse = document.querySelector('#oceanix .response');
    const oceanixMouse = document.querySelector('#oceanix .fa-computer-mouse');
    const dogenTextbox = document.querySelector('#dogen .textbox');
    const dogenResponse = document.querySelector('#dogen .response');
    const dogenMouse = document.querySelector('#dogen .fa-computer-mouse');
    const doneBtn = document.querySelector('#done');
    const overlay = document.querySelector('#overlay');
    const dimmer = document.querySelector('#dimmer')
    const selection = document.querySelector('#city-selection');
    const choiceTextbox = document.querySelector('#city-selection .textbox');
    const cityChoices = document.querySelectorAll('.choice');
    let chosenCity;
    const chosenCityImg = document.querySelector('#chosen-city');
    const end = document.querySelector('#ending');
    const finalTextbox = document.querySelector('#final-textbox');
    const replay = document.querySelector('#replay');


    // Start page
    startBtn.addEventListener('click', function () {
        fadeIn(box);
        // box.className = 'showing';
        header.style.animation = 'fadeout 0.5s ease-in'
        setTimeout(function () {
            header.className = 'hidden'
        }, 500)
        fadeIn(onboarding);
        new TypeIt("#ob-1", {
            strings: "Hello, and welcome to Seabnb, the online rating platform for floating cities! I'm Savvy the Sea Turtle, and I'll be assisting you on your journey today!",
            speed: 10,
            waitUntilVisible: true,
        }).go();
    })

    document.querySelector('#skip-intro').addEventListener('click', function () {
        // onboarding.style.animation = 'fadeout 0.5s ease-in'
        // setTimeout(function () {
        //     onboarding.className = 'hidden'
        // }, 500)
        fadeOut(onboarding);
        // onboarding.className = 'hidden';
        fadeIn(locationSel);
    })

    function fadeOut(element){
        element.style.animation = 'fadeout 0.5s ease-in'
        setTimeout(function () {
            element.className = 'hidden'
        }, 500)
    }

    function fadeIn(element) {
        element.style.animation = 'fadein 0.5s ease-in'
        setTimeout(function () {
            element.className = 'showing';
        }, 500)
    }

    onboardingTextbox.addEventListener('click', function () {
        let ob1 = document.querySelector('#ob-1');
        let ob2 = document.querySelector('#ob-2');
        let ob3 = document.querySelector('#ob-3');
        let ob4 = document.querySelector('#ob-4');
        let ob5 = document.querySelector('#ob-5');
        const peaceful = document.querySelector('#peaceful');
        const oceanstorm = document.querySelector('#oceanstorm');
        const floating = document.querySelector('#floating');
        const backstory = document.querySelector('#backstory');
        if (ob1.className === 'showing') {
            ob1.className = 'hidden';
            ob2.className = 'showing';
            fadeOut(peaceful);
            fadeIn(oceanstorm);
            // backstory.innerHTML = '<img src="images/oceanstorm.png" id="oceanstorm" class="background" alt="oceanstorm">'
            new TypeIt("#ob-2", {
                strings: "In the near future, sea levels will rise due to climate change and cause many coastal areas to become inhabitable, displacing a multitude of coastal communities.",
                speed: 10,
                waitUntilVisible: true,
            }).go();
        } else if (ob2.className === 'showing') {
            ob2.className = 'hidden';
            ob3.className = 'showing';
            fadeOut(oceanstorm);
            fadeIn(floating);
            new TypeIt("#ob-3", {
                strings: "Floating city projects have emerged as an answer to this crisis, claiming to allow those that have been displaced (and anyone else who is interested) a safe and comfortable home.",
                speed: 10,
                waitUntilVisible: true,
            }).go();
        } else if (ob3.className === 'showing') {
            ob3.className = 'hidden';
            ob4.className = 'showing';
            new TypeIt("#ob-4", {
                strings: "Seabnb aims to allow people to make informed decisions about living in floating cities, which is why we're allowing to explore these floating cities to know which floating city is right for you!",
                speed: 10,
                waitUntilVisible: true,
            }).go();
        } else if (ob4.className === 'showing') {
            ob4.className = 'hidden';
            ob5.className = 'showing';
            new TypeIt("#ob-5", {
                strings: "There are three different floating cities that you can choose from: <strong>Maldives Floating City</strong> in Maldvies, <strong>Oceanix Busan</strong> in South Korea, and <strong>Dogen City</strong> in Japan. We wish you good luck!",
                speed: 10,
                waitUntilVisible: true,
            }).go();
        } else {
            onboarding.style.animation = 'fadeout 0.5s ease-in'
            setTimeout(function () {
                onboarding.className = 'hidden'
            }, 500)
            // onboarding.className = 'hidden';
            locationSel.style.animation = 'fadein 0.5s ease-in'
            setTimeout(function () {
                locationSel.className = 'showing';
            }, 500)

        }

    })

    pin1.addEventListener('click', function () {
        fadeOut(locationSel);
        fadeIn(maldives);
        // locationSel.className = 'hidden';
        // maldives.className = 'showing';
        maldivesMouse.className = 'fa-solid fa-computer-mouse';
        currentDialogue = document.querySelectorAll('#maldives-intro p');
        dialogueCount = 0;
        document.querySelector('#maldives-intro').className = 'showing';
        changeText(dialogueCount, currentDialogue, maldivesResponse);
    })

    pin2.addEventListener('click', function () {
        fadeOut(locationSel);
        fadeIn(oceanix);
        // locationSel.className = 'hidden';
        // oceanix.className = 'showing';
        oceanixMouse.className = 'fa-solid fa-computer-mouse';
        currentDialogue = document.querySelectorAll('#oceanix-intro p');
        dialogueCount = 0;
        document.querySelector('#oceanix-intro').className = 'showing';
        changeText(dialogueCount, currentDialogue, oceanixResponse);
    })

    pin3.addEventListener('click', function () {
        fadeOut(locationSel);
        fadeIn(dogen);
        // locationSel.className = 'hidden'
        // dogen.className = 'showing';
        dogenMouse.className = 'fa-solid fa-computer-mouse';
        currentDialogue = document.querySelectorAll('#dogen-intro p');
        dialogueCount = 0;
        document.querySelector('#dogen-intro').className = 'showing';
        changeText(dialogueCount, currentDialogue, dogenResponse);
    })

    function changeText(dialogueCount, text, response, mouse) {
        console.log(text);
        console.log(text.length);
        console.log(dialogueCount);
        if (dialogueCount <= text.length - 1) {
            response.className = 'response hidden'
            text.forEach(element => {
                element.className = 'hidden'
            });
            text[dialogueCount].className = 'showing';
            const line = text[dialogueCount].textContent;
            text[dialogueCount].textContent = '';
            new TypeIt(text[dialogueCount], {
                strings: line,
                speed: 10,
                waitUntilVisible: true,
            }).go();
        } else if (dialogueCount > text.length - 1) {
            response.className = 'response';
            mouse.className = 'hidden';
        }

    }

    // Maldives
    maldivesTextbox.addEventListener('click', function () {
        dialogueCount++
        changeText(dialogueCount, currentDialogue, maldivesResponse, maldivesMouse)
    })

    document.querySelector('#m1').addEventListener('click', function () {
        dialogueCount = 0;
        maldivesMouse.className = 'fa-solid fa-computer-mouse';
        document.querySelector('#m1').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#maldives-intro').className = 'hidden'
        document.querySelectorAll('#maldives-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#maldives-q1').className = 'showing'
        currentDialogue = document.querySelectorAll('#maldives-q1 p');
        changeText(dialogueCount, currentDialogue, maldivesResponse, maldivesMouse)
    })

    document.querySelector('#m2').addEventListener('click', function () {
        dialogueCount = 0;
        maldivesMouse.className = 'fa-solid fa-computer-mouse';
        document.querySelector('#m2').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#maldives-intro').className = 'hidden'
        document.querySelectorAll('#maldives-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#maldives-q2').className = 'showing'
        currentDialogue = document.querySelectorAll('#maldives-q2 p');
        changeText(dialogueCount, currentDialogue, maldivesResponse, maldivesMouse)
    })

    document.querySelector('#m3').addEventListener('click', function () {
        dialogueCount = 0;
        maldivesMouse.className = 'fa-solid fa-computer-mouse';
        document.querySelector('#m3').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#maldives-intro').className = 'hidden'
        document.querySelectorAll('#maldives-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#maldives-q3').className = 'showing'
        currentDialogue = document.querySelectorAll('#maldives-q3 p');
        changeText(dialogueCount, currentDialogue, maldivesResponse, maldivesMouse)
    })

    document.querySelector('#m4').addEventListener('click', function () {
        dialogueCount = 0;
        document.querySelectorAll('#maldives-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#maldives-q4').className = 'showing';
        const thankYou = document.querySelector('#maldives-q4 p')
        thankYou.className = 'showing'
        new TypeIt('#maldives-q4 p', {
            strings: "Thank you for visiting Maldives Floating City! We hope you choose to stay with us!",
            speed: 20,
            waitUntilVisible: true,
        }).go();
        maldivesResponse.className = 'response hidden';
        setTimeout(function () {
            fadeOut(maldives);
            fadeIn(locationSel);
            // maldives.className = 'hidden';
            // locationSel.className = 'showing';
            thankYou.className = 'hidden'
            thankYou.textContent = '';
        }, 3000)
    })



    //Oceanix
    oceanixTextbox.addEventListener('click', function () {
        dialogueCount++
        changeText(dialogueCount, currentDialogue, oceanixResponse, oceanixMouse)
    })

    document.querySelector('#o1').addEventListener('click', function () {
        dialogueCount = 0;
        oceanixMouse.className = 'fa-solid fa-computer-mouse';
        document.querySelector('#o1').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#oceanix-intro').className = 'hidden'
        document.querySelectorAll('#oceanix-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#oceanix-q1').className = 'showing'
        currentDialogue = document.querySelectorAll('#oceanix-q1 p');
        changeText(dialogueCount, currentDialogue, oceanixResponse, oceanixMouse)
    })

    document.querySelector('#o2').addEventListener('click', function () {
        dialogueCount = 0;
        oceanixMouse.className = 'fa-solid fa-computer-mouse';
        document.querySelector('#o2').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#oceanix-intro').className = 'hidden'
        document.querySelectorAll('#oceanix-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#oceanix-q2').className = 'showing'
        currentDialogue = document.querySelectorAll('#oceanix-q2 p');
        changeText(dialogueCount, currentDialogue, oceanixResponse, oceanixMouse)
    })

    document.querySelector('#o3').addEventListener('click', function () {
        dialogueCount = 0;
        oceanixMouse.className = 'fa-solid fa-computer-mouse';
        document.querySelector('#o3').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#oceanix-intro').className = 'hidden'
        document.querySelectorAll('#oceanix-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#oceanix-q3').className = 'showing'
        currentDialogue = document.querySelectorAll('#oceanix-q3 p');
        changeText(dialogueCount, currentDialogue, oceanixResponse, oceanixMouse)
    })

    document.querySelector('#o4').addEventListener('click', function () {
        dialogueCount = 0;
        document.querySelectorAll('#oceanix-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#oceanix-q4').className = 'showing';
        const thankYou = document.querySelector('#oceanix-q4 p')
        thankYou.className = 'showing'
        new TypeIt('#oceanix-q4 p', {
            strings: "Thank you for visiting Oceanix Busan! We hope you choose to stay with us!",
            speed: 20,
            waitUntilVisible: true,
        }).go();
        oceanixResponse.className = 'response hidden';
        setTimeout(function () {
            fadeOut(oceanix);
            fadeIn(locationSel);
            // oceanix.className = 'hidden';
            // locationSel.className = 'showing';
            thankYou.className = 'hidden'
            thankYou.textContent = '';
        }, 3000)
    })


    // Dogen city
    dogenTextbox.addEventListener('click', function () {
        dialogueCount++
        changeText(dialogueCount, currentDialogue, dogenResponse, dogenMouse)
    })

    document.querySelector('#d1').addEventListener('click', function () {
        dialogueCount = 0;
        dogenMouse.className = 'fa-solid fa-computer-mouse';
        document.querySelector('#d1').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#dogen-intro').className = 'hidden'
        document.querySelectorAll('#dogen-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#dogen-q1').className = 'showing'
        currentDialogue = document.querySelectorAll('#dogen-q1 p');
        changeText(dialogueCount, currentDialogue, dogenResponse, dogenMouse)
    })

    document.querySelector('#d2').addEventListener('click', function () {
        dialogueCount = 0;
        dogenMouse.className = 'fa-solid fa-computer-mouse';
        document.querySelector('#d2').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#dogen-intro').className = 'hidden'
        document.querySelectorAll('#dogen-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#dogen-q2').className = 'showing'
        currentDialogue = document.querySelectorAll('#dogen-q2 p');
        changeText(dialogueCount, currentDialogue, dogenResponse, dogenMouse)
    })

    document.querySelector('#d3').addEventListener('click', function () {
        dialogueCount = 0;
        dogenMouse.className = 'fa-solid fa-computer-mouse';
        document.querySelector('#d3').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#dogen-intro').className = 'hidden'
        document.querySelectorAll('#dogen-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#dogen-q3').className = 'showing'
        currentDialogue = document.querySelectorAll('#dogen-q3 p');
        changeText(dialogueCount, currentDialogue, dogenResponse, dogenMouse)
    })

    document.querySelector('#d4').addEventListener('click', function () {
        dialogueCount = 0;
        document.querySelectorAll('#dogen-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#dogen-q4').className = 'showing';
        const thankYou = document.querySelector('#dogen-q4 p')
        thankYou.className = 'showing'
        new TypeIt('#dogen-q4 p', {
            strings: "Thank you for visiting Dogen City! We hope you choose to stay with us!",
            speed: 20,
            waitUntilVisible: true,
        }).go();
        dogenResponse.className = 'response hidden';
        setTimeout(function () {
            fadeOut(dogen);
            fadeIn(locationSel);
            // dogen.className = 'hidden';
            // locationSel.className = 'showing';
            thankYou.className = 'hidden'
            thankYou.textContent = '';
        }, 3000)
    })

    doneBtn.addEventListener('click', function () {
        overlay.className = 'showing';
        dimmer.className = 'showing';
        doneBtn.className = 'hidden';
    })

    document.querySelector('#cancel').addEventListener('click', function () {
        overlay.className = 'hidden';
        dimmer.className = 'hidden';
        doneBtn.className = 'showing';
    })

    document.querySelector('#continue').addEventListener('click', function () {
        fadeOut(overlay);
        fadeOut(locationSel);
        fadeIn(selection);
        // overlay.className = 'hidden';
        // locationSel.className = 'hidden;'
        // selection.className = 'showing';
        dimmer.className = 'hidden';
        choiceTextbox.className = 'textbox showing';
        new TypeIt("#end1", {
            strings: "Thank you for taking time to discover and explore floating cities. Now, we ask you to take just a minute or two to select the floating city you'd like to live in the most.",
            speed: 10,
            waitUntilVisible: true,
        }).go();
    })

    // choiceTextbox.addEventListener('click', function () {
    //     console.log('clicked!')
    //     // document.querySelector('.background-color').className = 'showing';
    //     choiceTextbox.className = 'textbox hidden';
    // })

    cityChoices.forEach(element => {
        element.addEventListener('click', function () {
            if (element.id === 'choose-maldives') {
                chosenCity = 'Maldives Floating City';
                chosenCityImg.innerHTML = '<img src="images/maldives_overlook.jpg" class="background final" alt="maldives" alt="maldives-image" width="1000">'
            } else if (element.id === 'choose-oceanix') {
                chosenCity = 'Oceanix Busan'
                chosenCityImg.innerHTML = '<img src="images/oceanix-busan.jpg" class="background final" alt="maldives" alt="oceanix-image" width="1000">'
            } else if (element.id === 'choose-dogen') {
                chosenCity = 'Dogen City'
                chosenCityImg.innerHTML = '<img src="images/dogen-city.jpg" class="background final" alt="maldives" alt="dogen-image" width="1000">'
            } else {
                console.log('there was an error')
            }

            fadeOut(selection);
            fadeIn(end);
            // selection.className = 'hidden'
            // end.className = 'showing';
            new TypeIt('#final-1', {
                strings: `You chose to live in <strong>${chosenCity}</strong>. Good choice, we hope the move-in goes smoothly!`,
                speed: 10,
                waitUntilVisible: true,
            }).go();
        })

    });

    finalTextbox.addEventListener('click', function () {
        const final1 = document.querySelector('#final-1');
        const final2 = document.querySelector('#final-2');
        const final3 = document.querySelector('#final-3');
        const final4 = document.querySelector('#final-4');
        if (final1.className === 'showing') {
            final1.className = 'hidden';
            final2.className = 'showing';
            new TypeIt('#final-2', {
                strings: `To be honest, the future is always uncertain, especially with the effects of climate change getting worse and worse.`,
                speed: 10,
                waitUntilVisible: true,
            }).go();

        } else if (final2.className === 'showing') {
            final2.className = 'hidden';
            final3.className = 'showing';
            new TypeIt('#final-3', {
                strings: `But as long as we continue to live, we can find ways to adapt to the changing future, instead of always dreading what's happening around us.`,
                speed: 10,
                waitUntilVisible: true,
            }).go();
        } else if (final3.className === 'showing') {
            final3.className = 'hidden';
            final4.className = 'showing';
            new TypeIt('#final-4', {
                strings: 'Your willingness to traverse new possibilites will allow you to thrive, no matter what the future holds!',
                speed: 10,
                waitUntilVisible: true,
            }).go();
            document.querySelector('#final-textbox .fa-computer-mouse').className = 'fa-solid fa-computer-mouse hidden';
            setTimeout(function () { replay.className = 'showing'; }, 3000)

        }
    })

    replay.addEventListener('click', function () {
        window.location.reload();
    })



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