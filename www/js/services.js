angular.module('starter.services', [])

.factory('Clubs', function(){
  var clubs =[{
    id: 0,
    name: 'Driver',
    mDisLong: '260',
    mDisShrt: '200',
    fDisLong: '200',
    fDisShrt: '150'
  },{
    id: 1,
    name: '3-Wood',
    mDisLong: '235',
    mDisShrt: '180',
    fDisLong: '180',
    fDisShrt: '125'
  },{
    id: 2,
    name: '5-Wood',
    mDisLong: '210',
    mDisShrt: '170',
    fDisLong: '170',
    fDisShrt: '105'
  },{
    id: 3,
    name: '2-Iron',
    mDisLong: '210',
    mDisShrt: '170',
    fDisLong: '170',
    fDisShrt: '105'
  },{
    id: 4,
    name: '3-Iron',
    mDisLong: '200',
    mDisShrt: '160',
    fDisLong: '160',
    fDisShrt: '100'
  },{
    id: 5,
    name: '4-Iron',
    mDisLong: '185',
    mDisShrt: '150',
    fDisLong: '150',
    fDisShrt: '90'
  },{
    id: 6,
    name: '5-Iron',
    mDisLong: '170',
    mDisShrt: '140',
    fDisLong: '140',
    fDisShrt: '80'
  },{
    id: 7,
    name: '6-Iron',
    mDisLong: '160',
    mDisShrt: '130',
    fDisLong: '130',
    fDisShrt: '70'
  },{
    id: 8,
    name: '7-Iron',
    mDisLong: '150',
    mDisShrt: '120',
    fDisLong: '120',
    fDisShrt: '65'
  },{
    id: 9,
    name: '8-Iron',
    mDisLong: '140',
    mDisShrt: '110',
    fDisLong: '110',
    fDisShrt: '60'
  },{
    id: 10,
    name: '9-Iron',
    mDisLong: '130',
    mDisShrt: '95',
    fDisLong: '95',
    fDisShrt: '55'
  },{
    id: 11,
    name: 'PW',
    mDisLong: '120',
    mDisShrt: '80',
    fDisLong: '80',
    fDisShrt: '50'
  },{
    id: 12,
    name: 'SW',
    mDisLong: '100',
    mDisShrt: '60',
    fDisLong: '60',
    fDisShrt: '40'
  },{
    id: 13,
    name: 'Putter',
    mDisLong: '40',
    mDisShrt: '0',
    fDisLong: '40',
    fDisShrt: '0'
  }];

  return {
    all: function() {
      return clubs;
    },
    get: function(clubId) {
      for (var i = 0; i < clubs.length; i++) {
        if (clubs[i].id === parseInt(clubId)) {
          return clubs[i];
        }
      }
      return null;
    }
  }
})

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
    centerLng:'-104.890187',
    fWayShrtLat:'39.546965',
    fWayShrtLng: '-104.890290',
    fWayMidLat:'39.547436',
    fWayMidLng:'-104.889805',
    wHazardLat:'39.547495',
    wHazardLng:'-104.888797'
  }, {
    id: 6,
    name: 'Hole 7',
    par: 'Par: 3',
    face: 'img/mike.png',
    pinLat:'39.545690',
    pinLng:'-104.890271',
    centerLat:'39.546192',
    centerLng:'-104.889567',
    sTrapShrtLat:'39.545902',
    sTrapShrtLng:'-104.890099',
    sTrapLongLat:'39.545501',
    sTrapLongLng:'-104.890359'
  }, {
    id: 7,
    name: 'Hole 8',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.542243',
    pinLng:'-104.894395',
    centerLat:'39.542719',
    centerLng:'-104.892623',
    fWayShrtLat:'39.543710',
    fWayShrtLng:'-104.891799',
    fWayLongLat:'39.542505',
    fWayLongLng:'-104.893671',
  }, {
    id: 8,
    name: 'Hole 9',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.538986',
    pinLng:'-104.895493',
    centerLat:'39.540449',
    centerLng:'-104.894721',
    fWayShrtLat:'39.540332',
    fWayShrtLng:'-104.894525',
    fWayLongLat:'39.539247',
    fWayLongLng:'-104.895281'
  }, {
    id: 9,
    name: 'Hole 10',
    par: 'Par: 3',
    face: 'img/mike.png',
    pinLat:'39.537080',
    pinLng:'-104.894759',
    centerLat:'39.537767',
    centerLng:'-104.894721',
    fWayShrtLat:'39.537647',
    fWayShrtLng:'-104.894724',
    fWayLongLat:'39.537229',
    fWayLongLng:'-104.894722'
  }, {
    id: 10,
    name: 'Hole 11',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.535838',
    pinLng:'-104.886915',
    centerLat:'39.535676',
    centerLng:'-104.888703',
    fWayShrtLat:'39.535373',
    fWayShrtLng:'-104.890205',
    fWayLongLat:'39.535697',
    fWayLongLng:'-104.887879'
  }, {
    id: 11,
    name: 'Hole 12',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.532707',
    pinLng:'-104.886193',
    centerLat:'39.534151',
    centerLng:'-104.886367',
    fWayShrtLat:'39.534477',
    fWayShrtLng:'-104.886267',
    fWayLongLat:'39.533626',
    fWayLongLng:'-104.886282',
    wHazardLat:'39.532877',
    wHazardLng:'-104.886169'
  }, {
    id: 12,
    name: 'Hole 13',
    par: 'Par: 3',
    face: 'img/mike.png',
    pinLat:'39.533013',
    pinLng:'-104.887632',
    centerLat:'39.532365',
    centerLng:'-104.887497',
    fWayShrtLat:'39.532769',
    fWayShrtLng:'-104.887395',
    sTrapShrtLat:'39.533129',
    sTrapShrtLng:'-104.887559'
  }, {
    id: 13,
    name: 'Hole 14',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.530167',
    pinLng:'-104.889790',
    centerLat:'39.530566',
    centerLng:'-104.889042',
    fWayShrtLat:'39.530862',
    fWayShrtLng:'-104.888477',
    fWayLongLat:'39.530312',
    fWayLongLng:'-104.889222'
  }, {
    id: 14,
    name: 'Hole 15',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.530211',
    pinLng:'-104.894580',
    centerLat:'39.529738',
    centerLng:'-104.893210',
    fWayShrtLat:'39.529562',
    fWayShrtLng:'-104.893487',
    fWayLongLat:'39.529589',
    fWayLongLng:'-104.894253'
  }, {
    id: 15,
    name: 'Hole 16',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.533567',
    pinLng:'-104.888592',
    centerLat:'39.532868',
    centerLng:'-104.890106',
    fWayShrtLat:'39.531736',
    fWayShrtLng:'-104.891426',
    fWayMidLat:'39.532664',
    fWayMidLng:'-104.890187',
    fWayLongLat:'39.533360',
    fWayLongLng:'-104.889004'
  }, {
    id: 16,
    name: 'Hole 17',
    par: 'Par: 5',
    face: 'img/mike.png',
    pinLat:'39.533194',
    pinLng:'-104.893296',
    centerLat:'39.533343',
    centerLng:'-104.891507',
    fWayShrtLat:'39.533148',
    fWayShrtLng:'-104.891040',
    fWayLongLat:'39.533097',
    fWayLongLng:'-104.892595'
  }, {
    id: 17,
    name: 'Hole 18',
    par: 'Par: 4',
    face: 'img/mike.png',
    pinLat:'39.535856',
    pinLng:'-104.894186',
    centerLat:'39.534567',
    centerLng:'-104.894262',
    fWayShrtLat:'39.534170',
    fWayShrtLng:'-104.894369',
    fWayLongLat:'39.535559',
    fWayLongLng:'-104.894288'  
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
