var map;
var loneTreeGC = {lat: 39.538506,lng: -104.896333};
var arrowHeadGC = {lat:39.452007,lng: -105.078698};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.7392, lng: -104.9903},
    zoom: 8
  });
  var marker = new google.maps.Marker({
    position: loneTreeGC,
    map: map,
    title: 'LoneTree Golf Club',
    animation: google.maps.Animation.DROP
  });
  var marker2 = new google.maps.Marker({
    position: arrowHeadGC,
    map: map,
    title: 'ArrowHead Golf Club',
    animation: google.maps.Animation.DROP
  })
  var infoWindow = new google.maps.InfoWindow({
    content:'206yds'
  });
  marker.addListener('click',function(){
    infoWindow.open(map,marker)
  });
}
