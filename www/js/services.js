angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  var chats = [{
    id: 0,
    name: 'Hole 1',
    par: 'Par: 4',
    face: 'img/ben.png',
    pinLat:'39.542139',
    pinLng:'-104.896057',
    centerLat:'39.541530',
    centerLng:'-104.896829',
    sTrapShrtLat:'39.541361',
    sTrapShrtLng:'-104.897221',
    sTrapLongLat:'39.541790',
    sTrapLongLng:'-104.896232',
    fWayLat:'39.541510',
    fWayLng:'-104.896638'
  }, {
    id: 1,
    name: 'Hole 2',
    par: 'Par: 5',
    face: 'img/max.png',
    pinLat:'39.545541',
    pinLng:'-104.898266',
    centerLat:'39.544237',
    centerLng:'-104.898351',
    fWayShrtLat:'39.543478',
    fWayShrtLng:'-104.898523',
    fWayCenterLat:'39.544251',
    fWayCenterLng:'-104.898864',
    fWAyEndLat:'39.545237',
    fWayEndLng:'-104.898409'
  }, {
    id: 2,
    name: 'Hole 3',
    par: 'Par: 3',
    face: 'img/adam.jpg',
    pinLat:'39.546211',
    pinLng:'-104.897808',
    centerLat:'39.546030',
    centerLng:'-104.898540',
    wHazardLat:'39.546182',
    wHazardLng:'-104.898586',
    fWayCenterLat:'39.546074',
    fWayCenterLng:'-104.898145',
    greenEndLat:'39.546277',
    greenEndLng:'-104.897582'
  }, {
    id: 3,
    name: 'Hole 4',
    par: 'Par: 4',
    face: 'img/perry.png',
    pinLat:'39.542939',
    pinLng:'-104.897085',
    centerLat:'39.544383',
    centerLng:'-104.897506',
    fWayShrtLat:'39.544495',
    fWayShrtLng:'-104.897834',
    fWayCenterLat:'39.543751',
    fWayCenterLng:'-104.897663',
    greenEndLat:'39.542764',
    greenEndLng:'-104.896951'
  }, {
    id: 4,
    name: 'Hole 5',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.545017',
    pinLng:'-104.891696',
    centerLat:'39.544353',
    centerLng:'-104.893402',
    fWayShrtLat:'39.543187',
    fWayShrtLng:'-104.894852',
    fWayCenterLat:'39.543888',
    fWayCenterLng:'-104.893305',
    fWayLongLat:'39.544701',
    fWayLongLng:'-104.892005',
  }, {
    id: 5,
    name: 'Hole 6',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.547387',
    pinLng:'-104.888373',
    centerLat:'39.547009',
    centerLng:'-104.890187'
  }, {
    id: 6,
    name: 'Hole 7',
    par: 'Par: 3',
    face: 'img/mike.png',
    pinLat:'39.545690',
    pinLng:'-104.890271',
    centerLat:'39.546192',
    centerLng:'-104.889567'
  }, {
    id: 7,
    name: 'Hole 8',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.542243',
    pinLng:'-104.894395',
    centerLat:'39.542719',
    centerLng:'-104.892623'
  }, {
    id: 8,
    name: 'Hole 9',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.538986',
    pinLng:'-104.895493',
    centerLat:'39.540449',
    centerLng:'-104.894721'
  }, {
    id: 9,
    name: 'Hole 10',
    par: 'Par: 3',
    face: 'img/mike.png',
    pinLat:'39.537080',
    pinLng:'-104.894759',
    centerLat:'39.537767',
    centerLng:'-104.894721'
  }, {
    id: 10,
    name: 'Hole 11',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.535838',
    pinLng:'-104.886915',
    centerLat:'39.535676',
    centerLng:'-104.888703'
  }, {
    id: 11,
    name: 'Hole 12',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.532707',
    pinLng:'-104.886193',
    centerLat:'39.534151',
    centerLng:'-104.886367'
  }, {
    id: 12,
    name: 'Hole 13',
    par: 'Par: 3',
    face: 'img/mike.png',
    pinLat:'39.533013',
    pinLng:'-104.887632',
    centerLat:'39.532365',
    centerLng:'-104.887497'
  }, {
    id: 13,
    name: 'Hole 14',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.530167',
    pinLng:'-104.889790',
    centerLat:'39.530566',
    centerLng:'-104.889042'
  }, {
    id: 14,
    name: 'Hole 15',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.530211',
    pinLng:'-104.894580',
    centerLat:'39.529738',
    centerLng:'-104.893210'
  }, {
    id: 15,
    name: 'Hole 16',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.533567',
    pinLng:'-104.888592',
    centerLat:'39.532868',
    centerLng:'-104.890106'
  }, {
    id: 16,
    name: 'Hole 17',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.533194',
    pinLng:'-104.893296',
    centerLat:'39.533343',
    centerLng:'-104.891507'
  }, {
    id: 17,
    name: 'Hole 18',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.535856',
    pinLng:'-104.894186',
    centerLat:'39.534567',
    centerLng:'-104.894262'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
  };
});
