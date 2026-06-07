(function () {
    'use strict'
    console.log('reading js');

    const startBtn = document.querySelector('#start');
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


    // Start page
    startBtn.addEventListener('click', function () {
        document.querySelector('header').className = 'hidden';
        box.className = 'showing';
        onboarding.className = 'showing'
        new TypeIt("#ob-1", {
            strings: "Hello, and welcome to the beta test for Seabnb, the online rating platform for floating cities! I'm Savvy the Sea Turtle, and I'll be assisting you on your journey today!",
            speed: 30,
            waitUntilVisible: true,
        }).go();
    })

    document.querySelector('#skip-intro').addEventListener('click', function(){
        onboarding.className = 'hidden';
        locationSel.className = 'showing';
    })

    onboardingTextbox.addEventListener('click', function(){
        let ob1 = document.querySelector('#ob-1');
        let ob2 = document.querySelector('#ob-2');
        let ob3 = document.querySelector('#ob-3');
        let ob4 = document.querySelector('#ob-4');
        let ob5 = document.querySelector('#ob-5');
        const backstory = document.querySelector('#backstory');
        if (ob1.className === 'showing') {
            ob1.className = 'hidden';
            ob2.className = 'showing';
            backstory.innerHTML = '<img src="images/oceanstorm.png" id="oceanstorm" alt="oceanstorm">'
            new TypeIt("#ob-2", {
                strings: "In the near future, sea levels will rise due to climate change and cause many coastal areas to become inhabitable, displacing a multitude of coastal communities.",
                speed: 20,
                waitUntilVisible: true,
            }).go();
        } else if (ob2.className === 'showing') {
            ob2.className = 'hidden';
            ob3.className = 'showing';
            backstory.innerHTML = '<img src="images/floating.png" id="floating" alt="floating city image">'
            new TypeIt("#ob-3", {
                strings: "Floating city projects have emerged as an answer to this crisis, claiming to allow those that have been displaced (and anyone else who is interested) a safe and comfortable home.",
                speed: 20,
                waitUntilVisible: true,
            }).go();
        } else if (ob3.className === 'showing') {
            ob3.className = 'hidden';
            ob4.className = 'showing';
            new TypeIt("#ob-4", {
                strings: "Seabnb aims to allow people to make informed decisions about living in floating cities, which is why we're asking you to explore these floating cities and form your own conclusions",
                speed: 20,
                waitUntilVisible: true,
            }).go();
        } else if (ob4.className === 'showing') {
            ob4.className = 'hidden';
            ob5.className = 'showing';
            new TypeIt("#ob-5", {
                strings: "You've been tasked with visiting three different floating cities: <strong>Maldives Floating City</strong> in Maldvies, <strong>Oceanix Busan in South Korea,</strong> and <strong>Dogen City in Japan</strong>. We wish you good luck!",
                speed: 20,
                waitUntilVisible: true,
            }).go();
        } else {
            onboarding.className = 'hidden';
            locationSel.className = 'showing';
        }
        
    })

    pin1.addEventListener('click', function () {
        locationSel.className = 'hidden';
        maldives.className = 'showing';
        currentDialogue = document.querySelectorAll('#maldives-intro p');
        changeText(dialogueCount, currentDialogue, maldivesResponse);
    })

    pin2.addEventListener('click', function () {
        locationSel.className = 'hidden';
        oceanix.className = 'showing';
        currentDialogue = document.querySelectorAll('#oceanix-intro p');
        changeText(dialogueCount, currentDialogue, oceanixResponse);
    })

    pin3.addEventListener('click', function () {
        locationSel.className = 'hidden'
        dogen.className = 'showing';
        currentDialogue = document.querySelectorAll('#dogen-intro p');
        changeText(dialogueCount, currentDialogue, dogenResponse);
    })

    function changeText(dialogueCount, text, response) {
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
            maldivesMouse.style.opacity = 0;
        }

    }

    // Maldives
    maldivesTextbox.addEventListener('click', function(){
        dialogueCount++
        changeText(dialogueCount, currentDialogue, maldivesResponse)
    })

    document.querySelector('#m1').addEventListener('click', function () {
        dialogueCount = 0;
        maldivesMouse.style.opacity = 1;
        document.querySelector('#m1').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#maldives-intro').className = 'hidden'
        document.querySelectorAll('#maldives-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#maldives-q1').className = 'showing'
        currentDialogue = document.querySelectorAll('#maldives-q1 p');
        changeText(dialogueCount, currentDialogue, maldivesResponse)
    })

    document.querySelector('#m2').addEventListener('click', function () {
        dialogueCount = 0;
        maldivesMouse.style.opacity = 1;
        document.querySelector('#m2').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#maldives-intro').className = 'hidden'
        document.querySelectorAll('#maldives-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#maldives-q2').className = 'showing'
        currentDialogue = document.querySelectorAll('#maldives-q2 p');
        changeText(dialogueCount, currentDialogue, maldivesResponse)
    })

    document.querySelector('#m3').addEventListener('click', function () {
        dialogueCount = 0;
        maldivesMouse.style.opacity = 1;
        document.querySelector('#m3').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#maldives-intro').className = 'hidden'
        document.querySelectorAll('#maldives-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#maldives-q3').className = 'showing'
        currentDialogue = document.querySelectorAll('#maldives-q3 p');
        changeText(dialogueCount, currentDialogue, maldivesResponse)
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
        maldivesResponse.className = 'hidden';
        setTimeout(function(){
            maldives.className = 'hidden';
            locationSel.className = 'showing';
            thankYou.className = 'hidden'
            thankYou.textContent = '';
        }, 3000)
    })



    //Oceanix
    oceanixTextbox.addEventListener('click', function(){
        dialogueCount++
        changeText(dialogueCount, currentDialogue, oceanixResponse)
    })

    document.querySelector('#o1').addEventListener('click', function () {
        dialogueCount = 0;
        oceanixMouse.style.opacity = 1;
        document.querySelector('#o1').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#oceanix-intro').className = 'hidden'
        document.querySelectorAll('#oceanix-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#oceanix-q1').className = 'showing'
        currentDialogue = document.querySelectorAll('#oceanix-q1 p');
        changeText(dialogueCount, currentDialogue, oceanixResponse)
    })

    document.querySelector('#o2').addEventListener('click', function () {
        dialogueCount = 0;
        oceanixMouse.style.opacity = 1;
        document.querySelector('#o2').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#oceanix-intro').className = 'hidden'
        document.querySelectorAll('#oceanix-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#oceanix-q2').className = 'showing'
        currentDialogue = document.querySelectorAll('#oceanix-q2 p');
        changeText(dialogueCount, currentDialogue, oceanixResponse)
    })

    document.querySelector('#o3').addEventListener('click', function () {
        dialogueCount = 0;
        oceanixMouse.style.opacity = 1;
        document.querySelector('#o3').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#oceanix-intro').className = 'hidden'
        document.querySelectorAll('#oceanix-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#oceanix-q3').className = 'showing'
        currentDialogue = document.querySelectorAll('#oceanix-q3 p');
        changeText(dialogueCount, currentDialogue, oceanixResponse)
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
        oceanixResponse.className = 'hidden';
        setTimeout(function(){
            oceanix.className = 'hidden';
            locationSel.className = 'showing';
            thankYou.className = 'hidden'
            thankYou.textContent = '';
        }, 3000)
    })    


    // Dogen city
    dogenTextbox.addEventListener('click', function(){
        dialogueCount++
        changeText(dialogueCount, currentDialogue, dogenResponse)
    })

    document.querySelector('#d1').addEventListener('click', function () {
        dialogueCount = 0;
        dogenMouse.style.opacity = 1;
        document.querySelector('#d1').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#dogen-intro').className = 'hidden'
        document.querySelectorAll('#dogen-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#dogen-q1').className = 'showing'
        currentDialogue = document.querySelectorAll('#dogen-q1 p');
        changeText(dialogueCount, currentDialogue, dogenResponse)
    })

    document.querySelector('#d2').addEventListener('click', function () {
        dialogueCount = 0;
        dogenMouse.style.opacity = 1;
        document.querySelector('#d2').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#dogen-intro').className = 'hidden'
        document.querySelectorAll('#dogen-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#dogen-q2').className = 'showing'
        currentDialogue = document.querySelectorAll('#dogen-q2 p');
        changeText(dialogueCount, currentDialogue, dogenResponse)
    })

    document.querySelector('#d3').addEventListener('click', function () {
        dialogueCount = 0;
        dogenMouse.style.opacity = 1;
        document.querySelector('#d3').style.color = 'rgb(85, 72, 62)'
        document.querySelector('#dogen-intro').className = 'hidden'
        document.querySelectorAll('#dogen-textbox section').forEach(element => {
            element.className = 'hidden'
        });
        document.querySelector('#dogen-q3').className = 'showing'
        currentDialogue = document.querySelectorAll('#dogen-q3 p');
        changeText(dialogueCount, currentDialogue, dogenResponse)
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
        dogenResponse.className = 'hidden';
        setTimeout(function(){
            dogen.className = 'hidden';
            locationSel.className = 'showing';
            thankYou.className = 'hidden'
            thankYou.textContent = '';
        }, 3000)
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