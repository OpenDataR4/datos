/*
  Use string.format like in python! Thanks for this solutions:
  https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format/4673436#4673436
*/
// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}


var legendTemplate = `
<div class="legengContent" onclick="hideShowLayer('{1}')">
    <i style="background: {0}"></i>
    <span> {1} </span>
</div>`


// Array to store layers for each feature type
var mapLayerGroups = [];

// Show or Hide each layer
var isVisibleLayer = {
    "PJ Frente para la Victoria": true,
    "Unión Cívica Radical": true,
    "PJ La Pampa": true, 
    "Movimiento Popular Neuquino": true,
    "Justicialista San Luis": true,
    "Frente Pro": true,
    "Frente Cívico por Santiago": true,
    "Partido Socialista": true, 
    "otros": true
};

// Layers colors
var layersColors = {
    "PJ Frente para la Victoria": "#0000ff", 
    "Unión Cívica Radical": "#ED1C24",
    "PJ La Pampa": "#318CE7", 
    "Movimiento Popular Neuquino":"#4169e1",
    "Justicialista San Luis": "#add8e6",
    "Frente Pro": "#FFD700",
    "Frente Cívico por Santiago":"#E60026",
    "Partido Socialista": "#fdbf6f", 
    "otros": "#ff7f00"
};

// URL of the tile
var urlTile = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// CopyLeft of the map
var mapAtribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';


// Create the map
var map = L.map('map',{
    // disable zoomControl when initializing map
    // (which is topleft by default)
    zoomControl: true
}).setView([0, 0], 2);


// Initialice the map
L.tileLayer(urlTile, {
    attribution: mapAtribution,
    maxZoom: 18
}).addTo(map);


// Add the legend to the plot on the bootom right corner
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend')
    // loop through layers names and generate a
    // label with a colored circle for each layer
    for (var color in layersColors) {
        div.innerHTML += legendTemplate.format(layersColors[color],
					       color);
    }
    return div;
};

legend.addTo(map);


// Country markers
L.geoJSON(countries, {
     onEachFeature: function (feature, layer) {
         layer.bindPopup(feature.properties.name);
     }
}).addTo(map);

// Connection
L.geoJSON(connections, {
    style: function(feature) {
	return {color: feature.properties.color,
		weight: feature.properties.contador};
    },
    onEachFeature: onEachFeature
}); //.addTo(map);

/*
 *for all features create a layerGroup for each feature type and add the feature to the    layerGroup
*/
function onEachFeature(feature, featureLayer) {
    // Create the popup
    var text = "<strong>Bloque:</strong> " + feature.properties.bloque +
	    "<br>"+
     	    "<strong>Cantidad de viajes:</strong> " +
	    feature.properties.contador;
    featureLayer.bindPopup(text);

    //does layerGroup already exist? if not create it and add to map
    var lg = mapLayerGroups[feature.properties.capa];

    if (lg === undefined) {
        lg = new L.layerGroup();
        //add the layer to the map
        lg.addTo(map);
        //store layer
        mapLayerGroups[feature.properties.capa] = lg;
    }

    //add the feature to the layer
    lg.addLayer(featureLayer);      
}

/*
  show/hide layerGroup   
*/
function hideShowLayer(layerName) {
    if (isVisibleLayer[layerName]) {
	// hide the layer
	var lg = mapLayerGroups[layerName];
	map.removeLayer(lg);

	isVisibleLayer[layerName] = false;
    }
    else {
	// Show the layer
	var lg = mapLayerGroups[layerName];
	map.addLayer(lg);

	isVisibleLayer[layerName] = true;
    }
};






