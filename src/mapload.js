mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5vbnVzZXIiLCJhIjoiY2s2djR6Ym53MGZtdjNma2hhZDNwYzhucCJ9.rZEsofTd-GtabwKxA4bjnw";

var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  center: [0, 0], // starting position [lng, lat]
  zoom: 1 // starting zoom
});
