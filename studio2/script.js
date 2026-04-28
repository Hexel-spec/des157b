(function () {
    'use strict';
    console.log('reading js')

    const display = document.querySelector('#display div');
    const label = document.querySelector('h3')
    const btns = document.querySelectorAll('button');
    const p1 = document.querySelector('#point1');
    const p2 = document.querySelector('#point2');
    const p3 = document.querySelector('#point3');
    const p4 = document.querySelector('#point4');
    const p5 = document.querySelector('#point5');
    const p6 = document.querySelector('#point6');
    const p7 = document.querySelector('#point7');
    const p8 = document.querySelector('#point8');

    async function getData() {
        const fetchPromise = await fetch('data.json');
        const data = await fetchPromise.json();
        console.log(data)
        udpdateInterface(data);
    }

    function udpdateInterface(data) {
        p1.addEventListener('click', function(){
            display.innerHTML = `<img src="${data.point1.image}" alt="mocha" width="200">`
            label.innerHTML = data.point1.item;
        })

        p2.addEventListener('click', function(){
            display.innerHTML = `<img src="${data.point2.image}" alt="mocha" width="200">`
            label.innerHTML = data.point2.item;
        })

        p3.addEventListener('click', function () {
            
            display.innerHTML = `<img src="${data.point3.image}" alt="latte" width="200">`
            label.innerHTML = data.point3.item;

            // from glenda: add an images key to your data and put the path to you image there or even just the name of the image file there and then construct a statement to get it from the data. For point3, for example the object would have this:

            // point3: 
            //    date: '4/3'
            //    item: 'Latte'
            //    location: 'Sage St...'
            //    price: 4.99
            //    image: images/latte.png

            // then you would call it into your code like this:
            // display.innerHTML = `<img src="${data.point3.image}" alt="latte">`;
            
            // display.innerHTML = '<img src="images/latte.png" alt="latte" width="200">'
            // label.innerHTML = `${data.point3.item};`
            // label.innerHTML = data.point3.item;
        })

        p4.addEventListener('click', function () {
            display.innerHTML = `<img src="${data.point4.image}" alt="pizza" width="200">`
            label.innerHTML = data.point4.item;
        })

        p5.addEventListener('click', function () {
            display.innerHTML = `<img src="${data.point5.image}" alt="unicycle" width="200">`
            label.innerHTML = data.point5.item;
        })

        p6.addEventListener('click', function () {
            display.innerHTML = `<img src="${data.point6.image}" alt="asada" width="200">`
            label.innerHTML = data.point6.item;
        })

        p7.addEventListener('click', function () {
            display.innerHTML = `<img src="${data.point7.image}" alt="cone" width="200">`
            label.innerHTML = data.point7.item;
        })

        p8.addEventListener('click', function () {
            display.innerHTML = `<img src="${data.point8.image}" alt="slider" width="200">`
            label.innerHTML = data.point8.item;
        })
        
    }

    // function outputHTML(data){
    //     let html = data.point3;
    //     return html;
    // }

    //  from glenda: there was no call to getData();
    getData();

})()