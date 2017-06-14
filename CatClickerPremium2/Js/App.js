var Model = {
  Current_Cat: null,
  Cats: [
    {
      name: "Kat",
      Img: "./Cat1.jpg",
      Count: 0
    },
    {
      name: "Esteven",
      Img: "./Cat2.jpg",
      Count: 0
    },
    {
      name: "Carlos",
      Img: "./Cat3.jpg",
      Count: 0
    },
    {
      name: "Jose",
      Img: "./Cat4.jpg",
      Count: 0
    },
    {
      name: "Liza",
      Img: "./Cat5.jpg",
      Count: 0
    }
  ]
};

var Octopus = {
  init: function() {
    View.init();
  },
  getCurrentCat: function() {
    return Model.Current_Cat;
  },
  setCurrentCat: function(All_Cats, index){
    for (var i = 0; i < All_Cats.length; i++) { //Buscara de entre todos los los objectos del model
      if(All_Cats[i].name === index){ // si la propiedad nombre del objeto es igual al argumento
        Model.Current_Cat = All_Cats[i];
      }
    }
  },
  setIntoInputs: function() {
    var Dom_Name = document.getElementById('Nombre_Cat');
    var Dom_Img = document.getElementById('Img_Link');
    var Count = document.getElementById('Count');
    Dom_Name.value = Model.Current_Cat.name;
    Dom_Img.value = Model.Current_Cat.Img;
    Count.value = Model.Current_Cat.Count;
  },
  Modification_Current_Cat: function() {
    var Dom_Name = document.getElementById('Nombre_Cat');
    var Dom_Img = document.getElementById('Img_Link');
    var Count = document.getElementById('Count');
    Model.Current_Cat.name = Dom_Name.value;
    Model.Current_Cat.Img = Dom_Img.value;
    Model.Current_Cat.Count = Count.value;
  },
  getCats: function() {
    return Model.Cats; // retornara el objeto Cats
  },
  getIncreaseCount: function() {
    Model.Current_Cat.Count ++; //Aqui se incrementa por 1 la propiedad Count del Current_Cat
    View.render();
  }
};

var View = {
  init: function() {
    this.CatsList = document.getElementsByClassName('Cat');
    this.Display_Cat = document.getElementById('Cat_Apeared');
    this.Button = document.getElementById('Admin_Button');
    this.CatView();
  },
  CatView: function() {
    if (document.body.addEventListener){ //Si se hace click en una parte del body
      document.body.addEventListener('click', Searching_Element, false); //Cuando pase toma una funcion
    }
    function Searching_Element(evento){// Esta funcion busca el elemento en el que se dio click y toma el evento en si como argumento
        evento = evento || window.event;
        var target = evento.target || evento.srcElement; //aqui toma el elemento donde se dio click
        if (target.className.match(/Cat/)) //Se verifica si la clase de ese elemento es Cat
        {
          Octopus.setCurrentCat(Octopus.getCats(), target.innerHTML);// tomando como el id del elemento clickeado
          View.render(); //Manda un mensaje al View para que se renderize
        }
      }
      var Buttons_Show = document.getElementById('Admin_Button'); //Boton Administrador
      var Send_info = document.getElementById('Send');// Mandar la informacion a modificar
      Buttons_Show.addEventListener('click', function() { //Si se preciona el Boton administrador
        Octopus.setIntoInputs();
        document.getElementById('Admin_form').style.visibility = 'visible';
        document.getElementById('Send').style.visibility = 'visible';
      }, true);
      Send_info.addEventListener('click', function() {// Si se preciona el Boton Mandar informacion 
        Octopus.Modification_Current_Cat();
        View.render();
      }, true);
  },
  render: function() {
    var Current_Cat_Obj = Octopus.getCurrentCat(); // Le dice al octopus que almacene en una variable el current_Cat
    this.Display_Cat.innerHTML = '<h2>' + Current_Cat_Obj.name + '</h2>' + '<h3>' + Current_Cat_Obj.Count + '</h3>' +
    '<img id="Image" src=' + Current_Cat_Obj.Img + '>';
    var Image = document.getElementById('Image');
    Image.addEventListener('click', function() { //Cuando se le de click a la imagen aumenta los clicks
      Octopus.getIncreaseCount();
    }, true);
  },
};

Octopus.init();
