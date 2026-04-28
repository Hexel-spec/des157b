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
    const bar = document.querySelector('#bar div')
    const evaluation = document.querySelector('#price-evaluation');

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
            bar.style.width = data.point1.price/20*100 + '%';
            priceEvaluation(data.point1.price);
        })

        p2.addEventListener('click', function(){
            display.innerHTML = `<img src="${data.point2.image}" alt="mocha" width="200">`
            label.innerHTML = data.point2.item;
            bar.style.width = data.point2.price/20*100 + '%';
            priceEvaluation(data.point2.price);
        })

        p3.addEventListener('click', function () {
            
            display.innerHTML = `<img src="${data.point3.image}" alt="latte" width="200">`
            label.innerHTML = data.point3.item;
            bar.style.width = data.point3.price/20*100 + '%';
            priceEvaluation(data.point3.price);

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
            bar.style.width = data.point4.price/20*100 + '%';
            priceEvaluation(data.point4.price);
        })

        p5.addEventListener('click', function () {
            display.innerHTML = `<img src="${data.point5.image}" alt="unicycle" width="200">`
            label.innerHTML = data.point5.item;
            bar.style.width = data.point5.price/20*100 + '%';
            priceEvaluation(data.point5.price);
        })

        p6.addEventListener('click', function () {
            display.innerHTML = `<img src="${data.point6.image}" alt="asada" width="200">`
            label.innerHTML = data.point6.item;
            bar.style.width = data.point6.price/20*100 + '%';
            priceEvaluation(data.point6.price);
        })

        p7.addEventListener('click', function () {
            display.innerHTML = `<img src="${data.point7.image}" alt="cone" width="200">`
            label.innerHTML = data.point7.item;
            bar.style.width = data.point7.price/20*100 + '%';
            priceEvaluation(data.point7.price);
        })

        p8.addEventListener('click', function () {
            display.innerHTML = `<img src="${data.point8.image}" alt="slider" width="200">`
            label.innerHTML = data.point8.item;
            bar.style.width = data.point8.price/20*100 + '%';
            priceEvaluation(data.point8.price);
        })
        
    }

    function priceEvaluation(price){
        if (price <= 6.6){
            bar.style.backgroundColor = 'lightblue';
            evaluation.innerHTML = 'cheap';
            evaluation.style.color = 'lightblue'
        } else if (price > 6.6 && price <= 13.2) {
            bar.style.backgroundColor = 'rgb(237, 215, 120)';
            evaluation.innerHTML = 'moderate';
            evaluation.style.color = 'rgb(255, 255, 182)';
        } else if (price > 13.2){
            bar.style.backgroundColor = 'rgb(253, 63, 6)';
            evaluation.innerHTML = 'expensive';
            evaluation.style.color = 'rgb(185, 51, 10)';
        }
    }

    // function outputHTML(data){
    //     let html = data.point3;
    //     return html;
    // }

    //  from glenda: there was no call to getData();
    getData();

})()