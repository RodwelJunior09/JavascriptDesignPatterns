var initMap = function(UbicationX, UbicationY) {
  // Create a map object and specify the DOM element for display.
  if (UbicationX === undefined && UbicationY === undefined) { //Si los argumentos de la funcion estan vacios
    ubication = {lat: 19.4556654, lng: -70.6966179}; // se le asignara la cuidad de santiago como default
  }
  else {
    ubication = {lat: UbicationX, lng: UbicationY}; // sino el valor de los argumentos
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: ubication
  });
  var marker = new google.maps.Marker({
      position: ubication,
      map: map
  });
}
var ubications = [ // Model de la aplicacion
  {
    Name: 'Santiago de los Caballeros',
    Lat: 19.4556654,
    lng: -70.6966179
  },
  {
    Name: 'Facebook HQ',
    Lat: 37.483127,
    lng: -122.1491106
  },
  {
    Name: 'Tokio, Japan',
    Lat:  35.6604012,
    lng:  139.7285575
  },
  {
    Name: 'Madrid, Spain',
    Lat: 40.4378698,
    lng: -3.8196221
  },
  {
    Name: 'GooglePlex, San Francisco',
    Lat: 37.4219999,
    lng: -122.0862462
  }
];

var FavUbication = function(data) { //Aqui se ajusta las propiedades de los datos
  this.Name = ko.observable(data.Name),
  this.Lat = ko.observable(data.Lat),
  this.Lng = ko.observable(data.lng)
}

var ViewModel = function() {
  var self = this; // Este es el this del ViewModel para que no halla confusion

  this.UbicationList = ko.observableArray([]); // Se declara como observable array

  ubications.forEach(function(Item) {
    self.UbicationList.push(new FavUbication(Item)); // Aqui se ajusta las propiedades de los datos
  });

  this.SearchMarker = function() { // Esta funcion se encarga de buscar y marcar el punto de ubicacion 
    Input = document.getElementById('Search').value;
    var Lat, Lng;
    for (var i = 0; i < self.UbicationList().length; i++) {
      if (Input === self.UbicationList()[i].Name()) {
        Lat = self.UbicationList()[i].Lat();
        Lng = self.UbicationList()[i].Lng();
        initMap(Lat, Lng);
      }
    }
  }

}

ko.applyBindings(new ViewModel());
