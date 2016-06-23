angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope) {})

.controller('LoginCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $cordovaGeolocation, $interval) {
  $scope.chat = Chats.get($stateParams.chatId);
  var options = {
    timeout: 10000,
    enableHighAccuracy: true
  };
  var currentHole = Chats.get($stateParams.chatId);
  $cordovaGeolocation.getCurrentPosition(options).then(function(position) {
    var pinLatLng = new google.maps.LatLng(currentHole.pinLat, currentHole.pinLng);
    var currentPOS = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    $scope.yrdToHole = (google.maps.geometry.spherical.computeDistanceBetween(currentPOS, pinLatLng) * 1.09361).toFixed(2);
  })
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MapCtrl', function($scope, $state, $stateParams, Chats, $cordovaGeolocation) {
  var options = {
    timeout: 10000,
    enableHighAccuracy: true
  };
  var currentHole = Chats.get($stateParams.chatId)
  $cordovaGeolocation.getCurrentPosition(options).then(function(position) {
    var latLng = new google.maps.LatLng(currentHole.centerLat, currentHole.centerLng);
    var pinLatLng = new google.maps.LatLng(currentHole.pinLat, currentHole.pinLng);
    var currentPOS = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    $scope.yrdToHoleMap = (google.maps.geometry.spherical.computeDistanceBetween(currentPOS, pinLatLng) * 1.09361).toFixed(2);
    var yrdToHoleVariable = $scope.yrdToHoleMap;

    var mapOptions = {
      center: latLng,
      // disableDefaultUI:true, TODO: Unhighlight this
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function() {
      var pinMarker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: pinLatLng,
      });
      var playerPOSMarker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: currentPOS,
      });
      var infoWindow = new google.maps.InfoWindow({
        content: yrdToHoleVariable + ' yards',
        enabled: true
      });
      var distanceLine = new google.maps.Polyline({
        path: [
          new google.maps.LatLng(currentHole.pinLat, currentHole.pinLng),
          new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        ],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      })
      distanceLine.setMap($scope.map);

      google.maps.event.addListener(pinMarker, 'click', function() {
        infoWindow.open($scope.map, pinMarker);
      });
    });
  }, function(error) {
    console.log("Could not get location");
  });
});
