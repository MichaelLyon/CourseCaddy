angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Hole 1',
    par: 'Par: 4',
    face: 'img/ben.png',
    lat:'',
    long:''

  }, {
    id: 1,
    name: 'Hole 2',
    par: 'Par: 5',
    face: 'img/max.png',
    lat:'',
    long:''
  }, {
    id: 2,
    name: 'Hole 3',
    par: 'Par: 3',
    face: 'img/adam.jpg',
    lat:'',
    long:''
  }, {
    id: 3,
    name: 'Hole 4',
    par: 'Par: 4',
    face: 'img/perry.png',
    lat:'',
    long:''
  }, {
    id: 4,
    name: 'Hole 5',
    par: 'Par: 5',
    face: 'img/mike.png',
    lat:'',
    long:''
  }, {
    id: 5,
    name: 'Hole 6',
    par: 'Par: 4',
    face: 'img/mike.png',
    lat:'',
    long:''
  }, {
    id: 6,
    name: 'Hole 7',
    par: 'Par: 3',
    face: 'img/mike.png',
    lat:'',
    long:''
  }, {
    id: 7,
    name: 'Hole 8',
    par: 'Par: 4',
    face: 'img/mike.png',
    lat:'',
    long:''
  }, {
    id: 8,
    name: 'Hole 9',
    par: 'Par: 4',
    face: 'img/mike.png',
    lat:'',
    long:''
  }, {
    id: 9,
    name: 'Hole 10',
    par: 'Par: 3',
    face: 'img/mike.png',
    lat:'',
    long:''
  }, {
    id: 10,
    name: 'Hole 11',
    par: 'Par: 5',
    face: 'img/mike.png',
    lat:'',
    long:''
  }, {
    id: 11,
    name: 'Hole 12',
    par: 'Par: 4',
    face: 'img/mike.png',
    lat:'',
    long:''
  }, {
    id: 12,
    name: 'Hole 13',
    par: 'Par: 3',
    face: 'img/mike.png',
    lat:'',
    long:''
  }, {
    id: 13,
    name: 'Hole 14',
    par: 'Par: 4',
    face: 'img/mike.png',
    lat:'',
    long:''
  }, {
    id: 14,
    name: 'Hole 15',
    par: 'Par: 4',
    face: 'img/mike.png',
    lat:'',
    long:''
  }, {
    id: 15,
    name: 'Hole 16',
    par: 'Par: 5',
    face: 'img/mike.png',
    lat:'',
    long:''
  }, {
    id: 16,
    name: 'Hole 17',
    par: 'Par: 4',
    face: 'img/mike.png',
    lat:'',
    long:''
  }, {
    id: 17,
    name: 'Hole 18',
    par: 'Par: 4',
    face: 'img/mike.png',
    lat:'',
    long:''
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
