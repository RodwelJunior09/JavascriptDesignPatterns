var ViewModel = function() {
  this.name = ko.observable('Katty'),
  this.img = ko.observable('./Images/Cat1.jpg'),
  this.count = ko.observable(0),

  // this.levels = ko.observableArray(['junior', 'teens']),
  this.level = ko.observable("hola"),

  // this.level = ko.observable(),
  // this.levels = ko.observableArray(['junior', 'teens'),
  this.levelup = function() {
    if (this.count < 5) {
      this.level('junior');
    }
    if (this.count > 10) {
      this.level('teens');
    }
  }
  this.incrementcount = function() {
    this.count((this.count() + 1));
  }
};
ko.applyBindings(new ViewModel);
