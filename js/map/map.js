"use strict";
    function initMap() {
    var location = { lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElements("map"), {
        zoom: 4,
        center: location
    }); 
    }