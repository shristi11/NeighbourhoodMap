var styles = [

    {

        featureType: 'water',

        stylers: [

            {
                color: '#19a0d8'
            }

        ]

    }, {

        featureType: 'administrative',

        elementType: 'labels.text.stroke',

        stylers: [

            {
                color: '#ffffff'
            },

            {
                weight: 6
            }

        ]

    }, {

        featureType: 'administrative',

        elementType: 'labels.text.fill',

        stylers: [

            {
                color: '#e85113'
            }

        ]

    }, {

        featureType: 'road.highway',

        elementType: 'geometry.stroke',

        stylers: [

            {
                color: '#efe9e4'
            },

            {
                lightness: -40
            }

        ]

    }, {

        featureType: 'transit.station',

        stylers: [

            {
                weight: 9
            },

            {
                hue: '#e85113'
            }

        ]

    }, {

        featureType: 'road.highway',

        elementType: 'labels.icon',

        stylers: [

            {
                visibility: 'off'
            }

        ]

    }, {

        featureType: 'water',

        elementType: 'labels.text.stroke',

        stylers: [

            {
                lightness: 100
            }

        ]

    }, {

        featureType: 'water',

        elementType: 'labels.text.fill',

        stylers: [

            {
                lightness: -100
            }

        ]

    }, {

        featureType: 'poi',

        elementType: 'geometry',

        stylers: [

            {
                visibility: 'on'
            },

            {
                color: '#f0e4d3'
            }

        ]

    }, {

        featureType: 'road.highway',

        elementType: 'geometry.fill',

        stylers: [

            {
                color: '#efe9e4'
            },

            {
                lightness: -25
            }

        ]

    }

];



// Constructor creates a new map - only center and zoom are required.

var map = new google.maps.Map(document.getElementById('map'), {

    center: {
        lat: 40.7413549,
        lng: -73.9980244
    },

    zoom: 13,

    styles: styles,

    mapTypeControl: false

});