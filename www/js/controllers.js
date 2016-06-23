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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MapCtrl', function($scope, $state, $stateParams, Chats, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
  var currentHole = Chats.get($stateParams.chatId)
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    var latLng = new google.maps.LatLng(currentHole.centerLat,currentHole.centerLng);
    var pinLatLng = new google.maps.LatLng(currentHole.pinLat,currentHole.pinLng);
    // var currentPOS = new
    // position.coords.latitude, position.coords.longitude ABOVE previous for targeting current pos
    var mapOptions = {
      center: latLng,
      // draggable: false,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
    var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: pinLatLng
      });
    var infoWindow = new google.maps.InfoWindow({
        content: "YRDS"
      });
     google.maps.event.addListener(marker, 'click', function () {
         infoWindow.open($scope.map, marker);
     });
    });
  }, function(error){
    console.log("Could not get location");
  });
});
