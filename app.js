
var locations = [

    {
        name: 'Metropolitan Museum of Art',
        lat: 40.779090041589036,
        lng: -73.9628431280359
    },

    {
        name: 'Whitney Museum of American Art',
        lat: 40.739521922152555,
        lng: -74.00893351271802
    },

    {
        name: 'American Museum of Natural History',
        lat: 40.78093997311628,
        lng: -73.97330640287038
    },

    {
        name: 'Museum of Modern Art (MOMA)',
        lat: 40.76141278917594,
        lng: -73.97693369182005
    },

    {
        name: 'Museum of Arts & Design (MAD)',
        lat: 40.76783725449877,
        lng: -73.98201866843489
    }

];

var Location = function(data) {

    var self = this;

    this.name = data.name;

    this.lat = data.lat;

    this.lng = data.lng;

    this.URL = "";

    this.street = "";

    this.city = "";

    this.phone = "";



    this.visible = ko.observable(true);



    var foursquareURL = 'https://api.foursquare.com/v2/venues/search?ll=' + this.lat + ',' + this.lng + '&client_id=WRNEXLJS211EBGSXX4RIIAWNG013BUPIPOTQCPOYQHSCPVOO&client_secret=Q3PTN0M2H0IEC52MVFO3HVUKQEU4CWX5WPLVLYCFAG0SW1BV&v=20131016' + '&query=' + this.name;




    $.getJSON(foursquareURL).done(function(data) {

        var results = data.response.venues[0];

        self.URL = results.url;

        self.street = results.location.formattedAddress[0];

        self.city = results.location.formattedAddress[1];

        self.phone = results.contact.phone;

    }).fail(function() {

        alert("There was an error loading the data. Please try again.");

    });
    
};
    
    
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
