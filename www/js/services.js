angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Hole 1',
    par: 'Par: 4',
    face: 'img/ben.png',
    pinLat:'39.542139',
    pinLng:'-104.896057',
    centerLat:'',
    centerLng:''
  }, {
    id: 1,
    name: 'Hole 2',
    par: 'Par: 5',
    face: 'img/max.png',
    pinLat:'39.545541',
    pinLng:'-104.898266',
    centerLat:'',
    centerLng:''
  }, {
    id: 2,
    name: 'Hole 3',
    par: 'Par: 3',
    face: 'img/adam.jpg',
    pinLat:'39.546211',
    pinLng:'-104.897808',
    centerLat:'',
    centerLng:''
  }, {
    id: 3,
    name: 'Hole 4',
    par: 'Par: 4',
    face: 'img/perry.png',
    pinLat:'39.542939',
    pinLng:'-104.897085',
    centerLat:'',
    centerLng:''
  }, {
    id: 4,
    name: 'Hole 5',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.545017',
    pinLng:'-104.891696',
    centerLat:'',
    centerLng:''
  }, {
    id: 5,
    name: 'Hole 6',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.547387',
    pinLng:'-104.888373',
    centerLat:'',
    centerLng:''
  }, {
    id: 6,
    name: 'Hole 7',
    par: 'Par: 3',
    face: 'img/mike.png',
    pinLat:'39.545690',
    pinLng:'-104.890271',
    centerLat:'',
    centerLng:''
  }, {
    id: 7,
    name: 'Hole 8',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.542243',
    pinLng:'-104.894395',
    centerLat:'',
    centerLng:''
  }, {
    id: 8,
    name: 'Hole 9',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.538986',
    pinLng:'-104.895493',
    centerLat:'',
    centerLng:''
  }, {
    id: 9,
    name: 'Hole 10',
    par: 'Par: 3',
    face: 'img/mike.png',
    pinLat:'39.537080',
    pinLng:'-104.894759',
    centerLat:'',
    centerLng:''
  }, {
    id: 10,
    name: 'Hole 11',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.535838',
    pinLng:'-104.886915',
    centerLat:'',
    centerLng:''
  }, {
    id: 11,
    name: 'Hole 12',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.532707',
    pinLng:'-104.886193',
    centerLat:'',
    centerLng:''
  }, {
    id: 12,
    name: 'Hole 13',
    par: 'Par: 3',
    face: 'img/mike.png',
    pinLat:'39.533013',
    pinLng:'-104.887632',
    centerLat:'',
    centerLng:''
  }, {
    id: 13,
    name: 'Hole 14',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.530167',
    pinLng:'-104.889790',
    centerLat:'',
    centerLng:''
  }, {
    id: 14,
    name: 'Hole 15',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.530211',
    pinLng:'-104.894580',
    centerLat:'',
    centerLng:''
  }, {
    id: 15,
    name: 'Hole 16',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.533567',
    pinLng:'-104.888592',
    centerLat:'',
    centerLng:''
  }, {
    id: 16,
    name: 'Hole 17',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.533194',
    pinLng:'-104.893296',
    centerLat:'',
    centerLng:''
  }, {
    id: 17,
    name: 'Hole 18',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.535856',
    pinLng:'-104.894186',
    centerLat:'',
    centerLng:''
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
    }
  };
});
