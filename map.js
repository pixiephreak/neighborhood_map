
      var map;

      var vintageStyles = [
							  {
							    "elementType": "geometry",
							    "stylers": [
							      {
							        "color": "#ebe3cd"
							      }
							    ]
							  },
							  {
							    "elementType": "labels.text.fill",
							    "stylers": [
							      {
							        "color": "#523735"
							      }
							    ]
							  },
							  {
							    "elementType": "labels.text.stroke",
							    "stylers": [
							      {
							        "color": "#f5f1e6"
							      }
							    ]
							  },
							  {
							    "featureType": "administrative",
							    "elementType": "geometry.stroke",
							    "stylers": [
							      {
							        "color": "#c9b2a6"
							      }
							    ]
							  },
							  {
							    "featureType": "administrative.land_parcel",
							    "elementType": "geometry.stroke",
							    "stylers": [
							      {
							        "color": "#dcd2be"
							      }
							    ]
							  },
							  {
							    "featureType": "administrative.land_parcel",
							    "elementType": "labels.text.fill",
							    "stylers": [
							      {
							        "color": "#ae9e90"
							      }
							    ]
							  },
							  {
							    "featureType": "landscape.natural",
							    "elementType": "geometry",
							    "stylers": [
							      {
							        "color": "#dfd2ae"
							      }
							    ]
							  },
							  {
							    "featureType": "poi",
							    "elementType": "geometry",
							    "stylers": [
							      {
							        "color": "#dfd2ae"
							      }
							    ]
							  },
							  {
							    "featureType": "poi",
							    "elementType": "labels.text.fill",
							    "stylers": [
							      {
							        "color": "#93817c"
							      }
							    ]
							  },
							  {
							    "featureType": "poi.park",
							    "elementType": "geometry.fill",
							    "stylers": [
							      {
							        "color": "#a5b076"
							      }
							    ]
							  },
							  {
							    "featureType": "poi.park",
							    "elementType": "labels.text.fill",
							    "stylers": [
							      {
							        "color": "#447530"
							      }
							    ]
							  },
							  {
							    "featureType": "road",
							    "elementType": "geometry",
							    "stylers": [
							      {
							        "color": "#f5f1e6"
							      }
							    ]
							  },
							  {
							    "featureType": "road.arterial",
							    "elementType": "geometry",
							    "stylers": [
							      {
							        "color": "#fdfcf8"
							      }
							    ]
							  },
							  {
							    "featureType": "road.highway",
							    "elementType": "geometry",
							    "stylers": [
							      {
							        "color": "#f8c967"
							      }
							    ]
							  },
							  {
							    "featureType": "road.highway",
							    "elementType": "geometry.stroke",
							    "stylers": [
							      {
							        "color": "#e9bc62"
							      }
							    ]
							  },
							  {
							    "featureType": "road.highway.controlled_access",
							    "elementType": "geometry",
							    "stylers": [
							      {
							        "color": "#e98d58"
							      }
							    ]
							  },
							  {
							    "featureType": "road.highway.controlled_access",
							    "elementType": "geometry.stroke",
							    "stylers": [
							      {
							        "color": "#db8555"
							      }
							    ]
							  },
							  {
							    "featureType": "road.local",
							    "elementType": "labels.text.fill",
							    "stylers": [
							      {
							        "color": "#806b63"
							      }
							    ]
							  },
							  {
							    "featureType": "transit.line",
							    "elementType": "geometry",
							    "stylers": [
							      {
							        "color": "#dfd2ae"
							      }
							    ]
							  },
							  {
							    "featureType": "transit.line",
							    "elementType": "labels.text.fill",
							    "stylers": [
							      {
							        "color": "#8f7d77"
							      }
							    ]
							  },
							  {
							    "featureType": "transit.line",
							    "elementType": "labels.text.stroke",
							    "stylers": [
							      {
							        "color": "#ebe3cd"
							      }
							    ]
							  },
							  {
							    "featureType": "transit.station",
							    "elementType": "geometry",
							    "stylers": [
							      {
							        "color": "#dfd2ae"
							      }
							    ]
							  },
							  {
							    "featureType": "water",
							    "elementType": "geometry.fill",
							    "stylers": [
							      {
							        "color": "#b9d3c2"
							      }
							    ]
							  },
							  {
							    "featureType": "water",
							    "elementType": "labels.text.fill",
							    "stylers": [
							      {
							        "color": "#92998d"
							      }
							    ]
							  }
							];
		var markers = [];

		var locations = [{title: '32Thirty-Two Apartments', location: {lat: 8.930985, lng: -77.023936}},
						{title: 'Park Morton Apartments', location: {lat: 38.932629, lng:-77.022091}},
						{title: '3 Tree Flats', location: {lat:38.939390, lng:-77.025359}},
						{title:'Park Place', location: {lat:38.937395, lng:-77.024877}},
						{title: 'The Swift Petworth', location: {lat:38.938373, lng:-77.024898}}];




	  function initMap() {

	  	var ecac = {lat: 38.924569, lng: -77.023722};

	    map = new google.maps.Map(document.getElementById('map'), {
	      center: ecac ,
	      zoom: 14, styles: vintageStyles
	    });

	    //call addMarker when map is clicked
	    map.addListener('click', function(event){
	    	addMarker(event.latLng);

	    });

	    for(let i= 0; i < locations.length; i++){
	    	console.log(locations[i].location);
			addMarker(locations[i].location);
		}
	}

    function addMarker(location) {
    	var marker = new google.maps.Marker({
    		position: location,
    		map: map
    	});
    	markers.push(marker);
    	//open infowindow on marker
    	marker.addListener('click', function(){
    		populateInfoWindow(this, largeInfoWindow);
    	})
    }

    console.log(markers);


	function setMapOnAll(map) {
	    for (var i = 0; i < markers.length; i++) {
	      markers[i].setMap(map);
 	   }
	}


	function showMarkers() {
	    setMapOnAll(map);
	}


	function clearMarkers() {
	     setMapOnAll(null);
	}








