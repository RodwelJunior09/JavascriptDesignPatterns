/*
This is empty on purpose! Your code to build the resume will go here.
 */
var Model = {
  bio: {
    name: "Rodwel Polanco Martinez",
    role: "Web Developer",
    contact: {
      mobile: "809-971-4957",
      email: "RodwelJunior@gmail.com",
      github: "RodwelJunior09",
      blog: "file:///C:/wamp/www/Javascript%20Design%20Patterns/frontend-nanodegree-resume/index.html",
      twitter: "Rodwel09",
      location: "Santiago de los Caballeros",
    },
    WelcomeMessage: "Welcome Rodwel to my Bio",
    Skills: ["Awesome","Programing", "Hi Bro", "Teach"],
    pictureUrl: "./images/RodwelPic.jpg",
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
        images: ["./images/programmer.jpg"],
      },
      {
        title: "HTML/Css/resume",
        dates: "20/10/2013",
        Description: "Mastering the Css/Html",
        images: ["./images/webdeveloment.jpg"],
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
        url: 'http://www.ipisa.edu.do/'
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
    ],
  }

};

var Octopus = {
  init: function() {
    View.init();
  },
  getName: function() {
    return Model.bio.name;
  },
  getRole: function() {
    return Model.bio.role;
  },
  getPicture: function() {
    return Model.bio.pictureUrl;
  },
  getWelcomeMsg: function() {
    return Model.bio.WelcomeMessage;
  },
  getAllContacts: function() {
    return Model.bio.contact;
  },
  getAllWorkedJobs: function() {
    return Model.work.jobs;
  },
  getAllSkills: function() {
    return Model.bio.Skills;
  },
  getAllProjects: function() {
    return Model.Allprojects.projects;
  },
  getSchools: function() {
    return Model.Education.schools;
  },
  getOnlineCourse: function(){
    return Model.Education.onlineCourse;
  }
};

var View = {
  init: function() {
    this.header = document.getElementById('header');
    this.work = document.getElementById('workExperience');
    this.projects = document.getElementById('projects');
    this.education = document.getElementById('education');
    View.render();
  },
  HeaderShow: function() {
    var Contacts = Octopus.getAllContacts();
    var formattedName = HTMLheaderName.replace('%data%', Octopus.getName());
    var formattedRole = HTMLheaderRole.replace('%data%', Octopus.getRole());
    var formattedImage = HTMLbioPic.replace('%data%', Octopus.getPicture());
    var formattedMsg = HTMLwelcomeMsg.replace('%data%', Octopus.getWelcomeMsg());
    var formattedMobile = HTMLmobile.replace('%data%', Contacts.mobile);
    var formattedemail = HTMLemail.replace('%data%', Contacts.email);
    var formattedtwitter = HTMLtwitter.replace('%data%', Contacts.twitter);
    var formattedgithub = HTMLtwitter.replace('%data%', Contacts.github);
    var formattedblog = HTMLblog.replace('%data%', Contacts.blog);
    var formattedlocation = HTMLlocation.replace('%data%', Contacts.location);
    this.header.innerHTML += formattedName;
    this.header.innerHTML += formattedRole;
    this.header.innerHTML += formattedImage;
    this.header.innerHTML += formattedMsg;
    this.header.innerHTML += formattedMobile;
    this.header.innerHTML += formattedemail;
    this.header.innerHTML += formattedtwitter;
    this.header.innerHTML += formattedgithub;
    this.header.innerHTML += formattedblog;
    this.header.innerHTML += formattedlocation;
  },
  SkillsShow: function() {
    var Skills = Octopus.getAllSkills();
    this.header.innerHTML += HTMLskillsStart;
    var list = document.getElementById('skills');
    for (var i = 0; i < Skills.length; i++) {
      var formattedSkills = HTMLskills.replace('%data%', Skills[i])
      list.innerHTML += formattedSkills;
    }
  },
  WorkDisplay: function() {
    this.work.innerHTML += HTMLworkStart;
    var Works = Octopus.getAllWorkedJobs();
    var Workdiv = document.getElementsByClassName('work-entry')[0];
    for (var i = 0; i < Works.length; i++) {
      var formattedEmployer = HTMLworkTitle.replace('%data%', Works[i].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', Works[i].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      Workdiv.innerHTML += formattedEmployerTitle;
      var formattedlocation = HTMLworkLocation.replace('%data%', Works[i].location);
      Workdiv.innerHTML += formattedlocation;
      var formattedYears = HTMLworkDates.replace('%data%', Works[i].Dates);
      Workdiv.innerHTML += formattedYears;
      var formattedDescription = HTMLworkDescription.replace('%data%', Works[i].Description);
      Workdiv.innerHTML += formattedDescription;
    }
  },
  ProjectsDisplay: function() {
    this.projects.innerHTML += HTMLprojectStart;
    var Projects = Octopus.getAllProjects();
    var ProjectDiv = document.getElementsByClassName('project-entry')[0];
    for (var i = 0; i < Projects.length; i++) {
      var formattedTitle = HTMLprojectTitle.replace('%data%', Projects[i].title);
      ProjectDiv.innerHTML += formattedTitle;
      var formattedDates = HTMLprojectDates.replace('%data%', Projects[i].dates);
      ProjectDiv.innerHTML += formattedDates;
      var formattedDescription = HTMLprojectDescription.replace('%data%', Projects[i].Description);
      ProjectDiv.innerHTML += formattedDescription;
      var formattedImages = HTMLprojectImage.replace('%data%', Projects[i].images[0]);
      ProjectDiv.innerHTML += formattedImages;
    }
  },
  EducationDisplay: function() {
    this.education.innerHTML += HTMLschoolStart;
    var Education = Octopus.getSchools();
    var divEducation = document.getElementsByClassName('education-entry')[0];
    for (var i = 0; i < Education.length; i++) {
      var formattedName = HTMLschoolName.replace('%data%', Education[i].NameSchools);
      var formattedDegree = HTMLschoolDegree.replace('%data%', Education[i].SchoolsDegree);
      var formattedNameDegree = formattedName + formattedDegree;
      divEducation.innerHTML += formattedNameDegree;
      var formattedYears = HTMLschoolDates.replace('%data%', Education[i].years);
      divEducation.innerHTML += formattedYears;
      var formattedlocation = HTMLschoolLocation.replace('%data%', Education[i].location);
      divEducation.innerHTML += formattedlocation;
      var formattedMajor = HTMLschoolMajor.replace('%data%', Education[i].Majors);
      divEducation.innerHTML += formattedMajor;
    }
  },
  EducationOnlineDisplay: function(){
    var divEducation = document.getElementsByClassName('education-entry')[0];
    divEducation.innerHTML += HTMLonlineClasses;
    var Online = Octopus.getOnlineCourse();
    for (var i = 0; i < Online.length; i++) {
      var formattedTitle = HTMLonlineTitle.replace('%data%', Online[i].title);
      var formattedSchools = HTMLonlineSchool.replace('%data%', Online[i].schools);
      var formattedDegreeSchools = formattedTitle + formattedSchools;
      divEducation.innerHTML += formattedDegreeSchools;
      var formattedDates = HTMLonlineDates.replace('%data%', Online[i].dates);
      divEducation.innerHTML += formattedDates;
      var formattedUrl = HTMLonlineURL.replace('%data%', Online[i].url);
      divEducation.innerHTML += formattedUrl;
    }
  },
  render: function() {
    View.HeaderShow();
    View.SkillsShow();
    View.WorkDisplay();
    View.EducationDisplay();
    View.ProjectsDisplay();
    View.EducationOnlineDisplay();
  }
}
Octopus.init();
