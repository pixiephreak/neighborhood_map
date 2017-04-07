
var initialMarkers = [{
    title: 'La Bamba Sub Shop',
    location: {
      lat: 38.924339,
      lng: -77.022798
    },
    type: 'business'
  },
  {
    title: 'Pleasant Plains Workshop',
    location: {
      lat: 38.924454,
      lng: -77.022806
    },
    type: 'business'
  },
  {
    title: 'Casa Ruby',
    location: {
      lat: 38.926763,
      lng: -77.023212
    },
    type: 'business'
  },
  {
    title: 'Harrar Coffee Roaster',
    location: {
      lat: 38.927267,
      lng: -77.023277
    },
    type: 'business'
  },
  {
    title: "Morgan's Seafood",
    location: {
      lat: 38.93017,
      lng: -77.023566
    },
    type: 'business'
  },
  {
    title: "Ana's Restaurant",
    location: {
      lat: 38.930857,
      lng: -77.023253
    },
    type: 'business'
  },
  {
    title: 'Yoga Heights',
    location: {
      lat: 38.933404,
      lng: -77.024329
    },
    type: 'business'
  },
  {
    title: 'Fish in the Hood',
    location: {
      lat: 38.934663,
      lng: -77.023904
    },
    type: 'business'
  },
  {
    title: '32Thirty-Two Apartments',
    location: {
      lat: 38.930985,
      lng: -77.023936
    },
    type: 'housing'
  },
  {
    title: 'Park Morton Apartments',
    location: {
      lat: 38.932629,
      lng: -77.022091
    },
    type: 'housing'
  },
  {
    title: '3 Tree Flats',
    location: {
      lat: 38.939390,
      lng: -77.025359
    },
    type: 'housing'
  },
  {
    title: 'Park Place at Petworth Metro',
    location: {
      lat: 38.937395,
      lng: -77.024877
    },
    type: 'housing'
  },
  {
    title: 'The Swift Petworth',
    location: {
      lat: 38.938373,
      lng: -77.024898
    },
    type: 'housing'
  }
];

var vm;

var Place = function(data, map) {
  var self = this;
  self.defaultIcon = makeMarkerIcon('ff5c33');
  self.highlitedIcon = makeMarkerIcon('9653ac');
  self.name = data.title;
  self.type = data.type;
  self.currentMarker = null;
  self.marker = new google.maps.Marker({
    map: map,
    position: data.location,
    animation: google.maps.Animation.DROP,
    title: data.title,
    icon: self.defaultIcon
  });
  self.toggleBounce = function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function() {
      infowindow.marker.setAnimation(null);
    }, 1400);
  };
  self.getData = function() {

    function nonce_generate() {
      return (Math.floor(Math.random() * 1e12).toString());
    }

    var yelp_url = 'https://api.yelp.com/v2/search';

    var parameters = {
      oauth_consumer_key: "yVy9s54D7PTzToicjSueFA",
      oauth_token: "ZgNxvcW8R_ccZOetOQl-hXbe3yqSwvgu",
      oauth_nonce: nonce_generate(),
      oauth_timestamp: Math.floor(Date.now() / 1000),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_version: '1.0',
      limit: 1,
      callback: 'cb',
      term: self.name,
      location: 'Washington, DC'
    };

    var encodedSignature = oauthSignature.generate('GET', yelp_url, parameters, "Z-qJKTqp-NRvzSGqnyaLgwyQY9s", "L61hpk9p-ec31fehJOwq58jDGzE");
    parameters.oauth_signature = encodedSignature;

    var settings = {
      url: yelp_url,
      data: parameters,
      cache: true, // This is crucial to include as well to prevent jQuery from adding on a cache-buster parameter "_=23489489749837", invalidating our oauth-signature
      dataType: 'jsonp',
      success: function(results) {
        var name = results.businesses[0].name || 'no name returned by Yelp for this location';
        var phone = results.businesses[0].display_phone || 'no phone returned by Yelp for this location';
        var image = results.businesses[0].image_url ||'no name image returned by Yelp for this location'
        console.log(name, phone, image, 'something');
        infowindow.setContent(`<div><span>Name: ${name}</span><br><span>Phone: ${phone}<span><br><img alt = "${name}" src ="${image}"/><div>`);
      },
      error: function(e) {
        alert('Yelp encountered an error!');
      }
    };

    // Send AJAX query via jQuery library.
    $.ajax(settings);
  }

  self.marker.addListener('mouseout', function() {
    this.setIcon(self.defaultIcon);
  });
  self.marker.addListener('mouseover', function() {
    this.setIcon(self.highlitedIcon);
  })
  self.marker.addListener('click', function() {
    if (infowindow.marker != self.marker) {
      infowindow.marker = self.marker;
      infowindow.open(map, self.marker);
      infowindow.addListener('closeclick', function() {
        infowindow.marker = null;
      });
      self.toggleBounce(this);
      self.getData();
    }
  });

};

var infowindow;

var ViewModel = function() {
  var self = this;
  this.categories = ko.observableArray(["All", "Housing", "Business"]);
  this.places = ko.observableArray([]);
  this.selectedCategory = ko.observable('');

  this.navVisible = ko.observable(true);
  this.toggleNav = function() {
    this.navVisible(!this.navVisible());
  }

  this.filterPlaces = ko.computed(function() {
    self.currentPlaces = ko.observableArray([]);
    if (!self.selectedCategory() || self.selectedCategory() === 'All') {
      self.places().forEach(function(place) {
        place.marker.setVisible(true);
      });
      return self.places();
    } else {
      self.places().forEach(function(place) {
        place.marker.setVisible(false); // marker is hidden

        var type = place.type;
        if (self.selectedCategory().toLowerCase() === type.toLowerCase()) {
          self.currentPlaces.push(place);
          place.marker.setVisible(true); // marker is shown
          place.marker.setAnimation(google.maps.Animation.DROP);

        }

      });
      return self.currentPlaces();
    }

  });

  this.initMap = function() {
    infowindow = new google.maps.InfoWindow();
    var map;
    var ecac = {
      lat: 38.924569,
      lng: -77.023722
    };
    var swift = {
      lat: 38.938373,
      lng: -77.024898
    }
    map = new google.maps.Map(document.getElementById('map'), {
      center: swift,
      zoom: 14,
      styles: vintageStyles,
      mapTypeControl: false
    });
    self.createMarkers(map);
  };

  this.createMarkers = function(map) {
    initialMarkers.forEach(function(place) {
      self.places.push(new Place(place, map));
    });
  };

  this.setWindow = function(clickedLoc) {
    var marker = clickedLoc.marker;
    google.maps.event.trigger(marker, 'click');
    self.toggleNav()
  }

};

vm = new ViewModel();
ko.applyBindings(vm);

function makeMarkerIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'https://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
    '|40|_|%E2%80%A2',
    new google.maps.Size(21, 34),
    new google.maps.Point(0, 0),
    new google.maps.Point(10, 34),
    new google.maps.Size(21, 34));
  return markerImage;
}

function googleError() {
  alert("Google failed to respond. Try again later");
}