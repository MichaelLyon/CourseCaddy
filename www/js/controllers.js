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

  function localStorageSaver(data){
    var localStorage1 = window.localStorage;
    return localStorage1.setItem = data;
  }
  console.log(localStorageSaver({id:1,club:'9Iron',disStartCord:100,disEndCord:200,totalDis:100}));

  function datEventListener(marker,infoWindow1){
    google.maps.event.addListener(marker,'click',function(){
      infoWindow1.open($scope.map, marker);
    })
  }

  function demMarkersDistanceBetween(obsticleLat,obsticleLng,currentPosition){
    var newLatLng = new google.maps.LatLng(obsticleLat,obsticleLng);
    var distanceBetween = (google.maps.geometry.spherical.computeDistanceBetween(currentPosition, newLatLng) * 1.09361).toFixed(2);
    return distanceBetween;
  }

  function infoWindowCreator(yardsInBetween){
    var returnedInfoWindow = new google.maps.InfoWindow({
      content: yardsInBetween + ' yards',
      enabled: true
    });
    return returnedInfoWindow
  }

  function disMarkerMaker(obsPOS){{
    var newMarker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: obsPOS,
    });
    return newMarker
  }}

  function tisButaPOS(lat,lng){
    var returnedLatLng = new google.maps.LatLng(lat,lng);
    return returnedLatLng;
  }


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
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
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
      datEventListener(pinMarker,infoWindow);

      //Update Hole Information
      if(currentHole.id ===0){
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.sTrapShrtLat,currentHole.sTrapShrtLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.sTrapShrtLat,currentHole.sTrapShrtLng,currentPOS)));
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.sTrapLongLat,currentHole.sTrapLongLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.sTrapLongLat,currentHole.sTrapLongLng,currentPOS)));
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.fWayLat,currentHole.fWayLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.fWayLat,currentHole.fWayLng,currentPOS)));
      }
      if(currentHole.id ===1){
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.fWayShrtLat,currentHole.fWayShrtLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.fWayShrtLat,currentHole.fWayShrtLng,currentPOS)));
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.fWayCenterLat,currentHole.fWayCenterLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.fWayCenterLat,currentHole.fWayCenterLng,currentPOS)));
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.fWAyEndLat,currentHole.fWayEndLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.fWAyEndLat,currentHole.fWayEndLng,currentPOS)));
      }
      if(currentHole.id ===2){
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.wHazardLat,currentHole.wHazardLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.wHazardLat,currentHole.wHazardLng,currentPOS)));
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.fWayCenterLat,currentHole.fWayCenterLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.fWayCenterLat,currentHole.fWayCenterLng,currentPOS)));
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.greenEndLat,currentHole.greenEndLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.greenEndLat,currentHole.greenEndLng,currentPOS)));
      }
      if(currentHole.id===3){
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.fWayShrtLat,currentHole.fWayShrtLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.fWayShrtLat,currentHole.fWayShrtLng,currentPOS)));
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.fWayCenterLat,currentHole.fWayCenterLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.fWayCenterLat,currentHole.fWayCenterLng,currentPOS)));
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.greenEndLat,currentHole.greenEndLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.greenEndLat,currentHole.greenEndLng,currentPOS)));
      }
      if(currentHole.id===4){
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.fWayShrtLat,currentHole.fWayShrtLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.fWayShrtLat,currentHole.fWayShrtLng,currentPOS)));
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.fWayCenterLat,currentHole.fWayCenterLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.fWayCenterLat,currentHole.fWayCenterLng,currentPOS)));
        datEventListener(disMarkerMaker(tisButaPOS(currentHole.fWayLongLat,currentHole.fWayLongLng)),infoWindowCreator(demMarkersDistanceBetween(currentHole.fWayLongLat,currentHole.fWayLongLng,currentPOS)));
      }
    });
  }, function(error) {
    console.log("Could not get location");
  });
});
