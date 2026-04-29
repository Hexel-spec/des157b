(function () {
    'use strict';

    // add your script here
    // var map = L.map('map').setView([51.505, -0.09], 13);
    var map = L.map('map').setView([37.686505, -122.147229], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var home = L.marker([37.686505, -122.147229]).addTo(map);
    var middleSchool = L.polygon([
        [37.686495, -122.149848],
        [37.686699, -122.148335],
        [37.688507, -122.14841],
        [37.688821, -122.14988]
    ]).addTo(map);
    var park = L.circle([37.694093, -122.146254], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.3,
        radius: 100
    }).addTo(map);


    home.bindPopup("This is our home.").openPopup();
    middleSchool.bindPopup("I attended middle school here");
    park.bindPopup("This is the park my family frequents.");
    

    // var marker = L.marker([51.5, -0.09]).addTo(map);

    // var circle = L.circle([51.508, -0.11], {
    //     color: 'red',
    //     fillColor: '#f03',
    //     fillOpacity: 0.5,
    //     radius: 500
    // }).addTo(map);

    // var polygon = L.polygon([
    //     [51.509, -0.08],
    //     [51.503, -0.06],
    //     [51.51, -0.047]
    // ]).addTo(map);

    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    // circle.bindPopup("I am a circle.");
    // polygon.bindPopup("I am a polygon.");

    // // var popup = L.popup()
    // //     .setLatLng([51.513, -0.09])
    // //     .setContent("I am a standalone popup.")
    // //     .openOn(map);

    // // function onMapClick(e) {
    // //     alert("You clicked the map at " + e.latlng);
    // // }

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);

}());