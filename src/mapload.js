Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}


mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5vbnVzZXIiLCJhIjoiY2s2djR6Ym53MGZtdjNma2hhZDNwYzhucCJ9.rZEsofTd-GtabwKxA4bjnw";

var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  center: [0, 0], // starting position [lng, lat]
  zoom: 1 // starting zoom
});

function centerMap()
{
	map.flyTo({ center: [0, 0], zoom: 1 });
}


var geojson = undefined;

function activateMarkers(movie, sceneLoc){
	
	var scenesArr = [];
	
	for(var i = 0; i < sceneLoc.length; i++)
	{
		var scene = {
			type: 'Feature',
			geometry: {
			  type: 'Point',
			  coordinates: [sceneLoc[i].latitude, sceneLoc[i].longitude]
			},
			properties: {
			  title: movie,
			  description: sceneLoc[i].description
			}		
		};
		
		scenesArr.push(scene);
	}
	
	geojson = {
	  type: 'FeatureCollection',
	  features: scenesArr
	};
	
	// add markers to map
	geojson.features.forEach(function(marker) {

	  // create a HTML element for each feature
	  var el = document.createElement('div');
	  el.className = 'marker';

	  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
  .addTo(map);
	});
	
	/*
	geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-4.1538, 40.1688]
    },
    properties: {
      title: 'Mapbox',
      description: 'Washington, D.C.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [11.7836, 51.2805]
    },
    properties: {
      title: 'Mapbox',
      description: 'San Francisco, California'
    }
  }]
};

	// add markers to map
	geojson.features.forEach(function(marker) {

	  // create a HTML element for each feature
	  var el = document.createElement('div');
	  el.className = 'marker';

	  // make a marker for each feature and add to the map
	  new mapboxgl.Marker(el)
		.setLngLat(marker.geometry.coordinates)
		.addTo(map);
	});*/
}

function resetMarkers()
{
	geojson = undefined;
	document.getElementsByClassName("marker").remove();
}
