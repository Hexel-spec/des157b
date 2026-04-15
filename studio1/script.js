(function(){
    'use strict';
    console.log('reading js');

    const myVideo = document.querySelector('#myVideo');
    const load = document.querySelector('#loading');
    const playToggle = document.querySelector('.fa-pause');
    const volToggle = document.querySelector('.fa-volume-xmark');
    const fullScreen = document.querySelector('.fa-expand');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    let playing = true;

    const script = {
        start: [1, 6, 11],
        stop: [5, 10, 15],
        line: [line1, line2, line3]
    }

    const intervalID = setInterval(checkTime, 1000)

    function checkTime() {
        for (let i = 0; i < script.start.length; i++) {
            if (script.start[i] < myVideo.currentTime && myVideo.currentTime < script.stop[i]) {
                script.line[i].className = "showing";
            } else {
                script.line[i].className = "hidden";
            }
        }
    }

    myVideo.addEventListener('playing', function(){
        load.style.display = 'none';
    })

    playToggle.addEventListener('click', function(){
        if(!playing) {
            myVideo.play();
            playToggle.className = 'fa-solid fa-pause';
            playing = true;
        } else {
            myVideo.pause();
            playToggle.className = 'fa-solid fa-play'
            playing = false;
        }
    })

    // Something is wrong with this one, fix later
    volToggle.addEventListener('click', function(){
        console.log('clicked and sound is ' +myVideo.muted);
        if (myVideo.muted == false) {
            volToggle.className = 'fa-solid fa-volume-xmark';
            myVideo.muted = true;
        } else {
            volToggle.className = 'fa-solid fa-volume-high';
            myVideo.muted = false;
        }
    })

    fullScreen.addEventListener('click', function(){
        if (!document.fullscreenElement) {
            fullScreen.className = 'fa-solid fa-compress'
            document.documentElement.requestFullscreen();
        } else {
            fullScreen.className = 'fa-solid fa-expand'
            document.exitFullscreen();
        }
    })

    myVideo.addEventListener('mousemove', function(event){
        myVideo.playbackRate = event.clientX / 300 + .25;
    })
    

}())