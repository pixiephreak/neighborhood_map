//HTML/View model bindings
// KNOCKOUT TO-DOs
// 	load map (viewModel bind <div> to something(attr?))
// 	load all markers (viewModel bind <div> to foreach array )
// 	list view dropdown (view model bind dropdown(bootstrap?) to filter function )(see google maps apartment finder course?)
// 	load infowindow content from api  ( bind infowindow <div>(where?))
// 	load animated timelapse background image from streetview api( viewmodel bind to <div>)

// APP FUNCTIONALITY
// 	landing page: map and all markers load
// 	interactivity: each marker has an infowindow / wikipedia info loads when clicked / background changes to streetview timelaps when infowindow when clicked
// 	filter: category can be selected from dropdown / reduces number of markers on screen/ creates <DIV>  to display overview text / infowindow behaves the same

// game plan: -> list view -> click binding to activate the list view items' markers -> filter the list and the markers -> third party api -> marker animation and styling

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

// list of places/locations to make into markers on load (apartments)
//TO-DO Add website content to data under key "info"
// add types
var initialMarkers = [
	{title: 'La Bamba Sub Shop', location: {lat: 38.924339, lng: -77.022798}, type: 'business'},
	{title: 'Pleasant Plains Workshop', location: {lat: 38.924454, lng: -77.022806}, type: 'business'},
	{title: 'Casa Ruby', location: {lat:8.926763, lng: -77.023212} , type: 'business'},
	{title:'Harrar Coffee Roaster', location: {lat:38.927267, lng: -77.023277} , type: 'business'},
	{title: "Morgan's Seafood", location: {lat:38.93017, lng: -77.023566} , type: 'business'},
	{title: "Ana's Restaurant", location: {lat: 38.930857, lng: -77.023253}, type: 'business'},
	{title: 'Yoga Heights', location: {lat: 38.933404, lng: -77.024329}, type: 'business'},
	{title: 'Fish in the Hood', location: {lat: 8.934663, lng: -77.023904}, type: 'business'},
	{title: '32Thirty-Two Apartments', location: {lat: 38.930985, lng: -77.023936}, type: 'housing'},
	{title: 'Park Morton Apartments', location: {lat: 38.932629, lng:-77.022091}, type: 'housing'},
	{title: '3 Tree Flats', location: {lat:38.939390, lng:-77.025359}, type: 'housing'},
	{title:'Park Place', location: {lat:38.937395, lng:-77.024877}, type: 'housing'},
	{title: 'The Swift Petworth', location: {lat:38.938373, lng:-77.024898}, type: 'housing'}
	];


var vm;


var Place = function(data, map) {
	var self = this;
	self.defaultIcon = makeMarkerIcon('ff5c33');
	self.highlitedIcon = makeMarkerIcon('9653ac');
	self.name = data.title;
	self.type = data.type;
	self.marker = new google.maps.Marker({
		map: map,
		position: data.location,
		animation: google.maps.Animation.DROP,
		title: data.title,
		icon: self.defaultIcon
	});
	self.marker.addListener('mouseout', function(){
		this.setIcon(self.defaultIcon);
	});
	self.marker.addListener('mouseover', function(){
		this.setIcon(self.highlitedIcon);
	})

	self.marker.addListener('click', function(){
		if(infowindow.marker != self.marker){
			infowindow.marker = self.marker;
			infowindow.open(map, self.marker);
			infowindow.setContent('<div>'+ data.title + '<div>');
			infowindow.addListener('closeclick', function(){
			infowindow.marker = null;
			});
			//setAnimation on click
			//set API request
			//add toggle button for list view to make it responsive using display none or display blick
			//slide in and out using off canvas or use bootstrap
		}
	})


	//this.marker.addListener
};

var infowindow;

var ViewModel = function(){
	var self = this;
	this.categories = ko.observableArray(["All","Housing","Business"]);
	this.places = ko.observableArray([]);
	this.selectedCategory = ko.observable('');
	this.filterPlaces = ko.computed(function(){
		self.currentPlaces = ko.observableArray([]);
		if(!self.selectedCategory()|| self.selectedCategory() === 'All'){
			self.places().forEach(function(place){
			place.marker.setVisible(true);
			});
			return self.places();
		}else{
			self.places().forEach(function(place){
				place.marker.setVisible(false); // marker is hidden

				var type = place.type;
				if(self.selectedCategory().toLowerCase() === type.toLowerCase()){
					self.currentPlaces.push(place);
					place.marker.setVisible(true); // marker is hidden
				}


			});
			return self.currentPlaces();
		}

});




	this.initMap = function(){
		infowindow = new google.maps.InfoWindow();
		var map;
		var ecac = {lat: 38.924569, lng: -77.023722};
		var swift = {lat:38.938373, lng:-77.024898}
		map = new google.maps.Map(document.getElementById('map'), {
			center: swift,
			zoom: 14, styles: vintageStyles,
			mapTypeControl: false
		});
		self.createMarkers(map);
	};

	this.createMarkers = function(map) {
		initialMarkers.forEach(function(place) {
			self.places.push(new Place(place, map));
		});
	};

	this.setWindow = function(clickedLoc){
		var marker = clickedLoc.marker;
		google.maps.event.trigger(marker,'click');
	}

};

vm = new ViewModel();
ko.applyBindings(vm);


function makeMarkerIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
    '|40|_|%E2%80%A2',
    new google.maps.Size(21, 34),
    new google.maps.Point(0, 0),
    new google.maps.Point(10, 34),
    new google.maps.Size(21,34));
  return markerImage;
}

