
      var map;



      function initMap() {

      	var styledMapType = new google.maps.StyledMapType(
      	[
      	  {
      	    "elementType": "geometry",
      	    "stylers": [
      	      {
      	        "color": "#f5f5f5"
      	      }
      	    ]
      	  },
      	  {
      	    "elementType": "labels.icon",
      	    "stylers": [
      	      {
      	        "visibility": "off"
      	      }
      	    ]
      	  },
      	  {
      	    "elementType": "labels.text.fill",
      	    "stylers": [
      	      {
      	        "color": "#616161"
      	      }
      	    ]
      	  },
      	  {
      	    "elementType": "labels.text.stroke",
      	    "stylers": [
      	      {
      	        "color": "#f5f5f5"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "administrative.land_parcel",
      	    "elementType": "labels.text.fill",
      	    "stylers": [
      	      {
      	        "color": "#bdbdbd"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "poi",
      	    "elementType": "geometry",
      	    "stylers": [
      	      {
      	        "color": "#eeeeee"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "poi",
      	    "elementType": "labels.text.fill",
      	    "stylers": [
      	      {
      	        "color": "#757575"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "poi.park",
      	    "elementType": "geometry",
      	    "stylers": [
      	      {
      	        "color": "#e5e5e5"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "poi.park",
      	    "elementType": "labels.text.fill",
      	    "stylers": [
      	      {
      	        "color": "#9e9e9e"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "road",
      	    "elementType": "geometry",
      	    "stylers": [
      	      {
      	        "color": "#ffffff"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "road.arterial",
      	    "elementType": "labels.text.fill",
      	    "stylers": [
      	      {
      	        "color": "#757575"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "road.highway",
      	    "elementType": "geometry",
      	    "stylers": [
      	      {
      	        "color": "#00f"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "road.highway",
      	    "elementType": "labels.text.fill",
      	    "stylers": [
      	      {
      	        "color": "#616161"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "road.local",
      	    "elementType": "labels.text.fill",
      	    "stylers": [
      	      {
      	        "color": "#00f"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "transit.line",
      	    "elementType": "geometry",
      	    "stylers": [
      	      {
      	        "color": "#e5e5e5"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "transit.station",
      	    "elementType": "geometry",
      	    "stylers": [
      	      {
      	        "color": "#eeeeee"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "water",
      	    "elementType": "geometry",
      	    "stylers": [
      	      {
      	        "color": "#c9c9c9"
      	      }
      	    ]
      	  },
      	  {
      	    "featureType": "water",
      	    "elementType": "labels.text.fill",
      	    "stylers": [
      	      {
      	        "color": "#9e9e9e"
      	      }
      	    ]
      	  }
      	], {name: 'Styled Map'});

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 38.924569, lng: -77.023722},
          zoom: 14, mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });

        map.mapTypes.set('styled_map', styledMapType);
        map.StyledMapTypeId('styled_map');
      }

