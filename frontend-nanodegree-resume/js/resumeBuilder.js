/*
This is empty on purpose! Your code to build the resume will go here.
 */
var Model = {
  bio: {
    name: "Rodwel",
    role: "Web Developer",
    contact: {
      mobile: "809-971-4957",
      email: "RodwelJunior@gmail.com",
      github: "RodwelJunior09",
      twitter: "Rodwel09",
      location: "Santiago de los Caballeros",
    },
    WelcomeMessage: "Welcome Rodwel to my Bio",
    Skills: ["Awesome","Programing", "Hi Bro", "Teach"],
    pictureUrl: ""
  },
  work: {
    jobs:[
      {
        employer: "Rodwel Polanco Martinez",
        title: "Computer_tecnician",
        location: "Santiago de los Caballeros",
        Dates: "20/9/2012",
        Description: "I Work for Google for quite a While, as frontend-Developer"
      },
      {
        employer: "Rodwel Polanco Martinez",
        title: "Computer Programing",
        location: "Santiago de los Caballeros",
        Dates: "30/10/2017",
        Description: "I Work for Udacity, until now as frontend-Developer"
      }
    ],
  },
  Allprojects: {
    projects: [
      {
        title: "JavaScript_Resume",
        dates: "30/9/2016",
        Description: "This Another projects of Udacity",
        images: []
      },
      {
        title: "HTML/Css/resume",
        dates: "20/10/2013",
        Description: "Mastering the Css/Html",
        images: []
      },
    ],
  },
  Education:{
    schools: [
      {
        NameSchools: "IPISA",
        SchoolsDegree: "Last Year in HIGH School",
        location: "Av Hispanoamericana Santiago",
        Majors: ['Computer_tecnician', 'HighSchool Degree'],
        years: '2012-2016',
        'url': 'http://www.ipisa.edu.do/'
      },
      {
        NameSchools: "Cardenal Beras",
        SchoolsDegree: "Basic Degree",
        location: "Barrio Lindo Santiago",
        Majors: ['Basic Course'],
        years: '2005-2012',
        url: "http://cardenalberas.edu.do/"
      }
    ],
    onlineCourse: [
      {
        title: "javascript Syntax",
        schools: "Udacity",
        dates: "2016",
        url: "https://classroom.udacity.com/courses/ud804/lessons/1930528550/concepts/19506785590923"
      }
    ]
  }

};

var Octopus = {
  init: function() {
    View.init();
  },
  getAllWorkedJobs: function() {
    return Model.work.jobs
  },
  getAllSkills: function() {
    return Model.bio.Skills
  },
  getAllProjects: function() {
    return Model.Allprojects.projects
  },
  getSchools: function() {
    return Model.Education.schools
  },
  getOnlineCourse: function(){
    return Model.Education.onlineCourse
  }
};

var View = {
  init: function() {
    this.header = document.getElementById('header');
    this.work = document.getElementById('workExperience');
    this.projects = document.getElementById('projects');
    this.education = document.getElementById('education');
    this.onlineClass = document.getElementById('onlineClasses');
    View.SkillsShow();
  },
  SkillsShow: function() {
    this.header.innerHTML = HTMLskillsStart;
    var Skills = Octopus.getAllSkills();
    for (var i = 0; i < Skills.length; i++) {
      var formatted = HTMLskills.replace('%data%', Skills[i]);
      this.header.innerHTML += formatted;
    }
    View.WorkDisplay();
  },
  WorkDisplay: function() {
    this.work.innerHTML = HTMLworkStart;
    var Works = Octopus.getAllWorkedJobs();
    for (var i = 0; i < Works.length; i++) {
      var formattedEmployer = HTMLworkTitle.replace('%data%', Works[i].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', Works[i].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      this.work.innerHTML += formattedEmployerTitle;
      var formattedlocation = HTMLworkLocation.replace('%data%', Works[i].location);
      this.work.innerHTML += formattedlocation;
      var formattedYears = HTMLworkDates.replace('%data%', Works[i].Dates);
      this.work.innerHTML += formattedYears;
      var formattedDescription = HTMLworkDescription.replace('%data%', Works[i].Description);
      this.work.innerHTML += formattedDescription;
    }
    View.ProjectsDisplay();
  },
  ProjectsDisplay: function() {
    this.projects.innerHTML = HTMLprojectStart;
    var Projects = Octopus.getAllProjects();
    for (var i = 0; i < Projects.length; i++) {
      var formattedTitle = HTMLprojectTitle.replace('%data%', Projects[i].title);
      this.projects.innerHTML += formattedTitle;
      var formattedDates = HTMLprojectDates.replace('%data%', Projects[i].Dates);
      this.projects.innerHTML += formattedDates;
      var formattedDescription = HTMLprojectDescription.replace('%data%', Projects[i].Description);
      this.projects.innerHTML += formattedDescription;
    }
    View.EducationDisplay();
  },
  EducationDisplay: function() {
    this.education.innerHTML = HTMLschoolStart;
    var Education = Octopus.getSchools();
    for (var i = 0; i < Education.length; i++) {
      var formattedName = HTMLschoolName.replace('%data%', Education[i].NameSchools);
      var formattedDegree = HTMLschoolDegree.replace('%data%', Education[i].SchoolsDegree);
      var formattedNameDegree = formattedName + formattedDegree;
      this.education.innerHTML += formattedNameDegree;
      var formattedYears = HTMLschoolDates.replace('%data%', Education[i].years);
      this.education.innerHTML += formattedYears;
      var formattedlocation = HTMLschoolLocation.replace('%data%', Education[i].location);
      this.education.innerHTML += formattedlocation;
    }
    View.EducationOnlineDisplay();
  },
  EducationOnlineDisplay: function(){
    this.onlineClass.innerHTML = HTMLonlineClasses;
    var Online = Octopus.getOnlineCourse();
    for (var i = 0; i < Online.length; i++) {
      var formattedTitle = HTMLonlineTitle.replace('%data%', Online[i].title);
      var formattedSchools = HTMLonlineSchool.replace('%data%', Online[i].schools);
      var formattedDegreeSchools = formattedTitle + formattedSchools;
      this.onlineClass.innerHTML += formattedDegreeSchools;
      var formattedDates = HTMLonlineDates.replace('%data%', Online[i].dates);
      this.onlineClasses.innerHTML += formattedDates;
      var formattedUrl = HTMLonlineURL.replace('%data%', Online[i].url);
      this.onlineClasses.innerHTML += formattedUrl;
    }
  }
}
Octopus.init();
