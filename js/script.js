"use strict";

    

    function initMap() {
        var location = {lat: 23.777176, lng: 90.399452};
        var map = new google.maps.Map(document.getElementById("map"), {
            center: location,
            zoom: 8
        });
        var marker = new google.maps.Marker({
            position: location,
            map : map
        });
    }