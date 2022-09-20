import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {

  selectedPlace?: Place;
 places: Place[]= [
  { id: 12, 
    name: 'Informatics Solution', 
    position:"Software Engineer",
    description:"" , 
    place: "Yerevan, Armenia", 
    duration: "September 2016 - Present", 
    technologies:["Java", "Spring Boot", "Hibernate/JPA", "AngularJS", "MySQL", "Git"]
  },
  { id: 13, 
    name: 'American University of Armenia', 
    position:"Masters degree in Computer and Information Science",
    description:"" ,
     place: "Yerevan, Armenia", 
     duration: "2016 - 2018", 
     coursework:["Software Project Management","Object Oriented Analysis and Design", "Natural Language Processing", "Machine Learning", "Cryptography"]
   },
  { id: 14, 
    name: 'Shahid Beheshti University', 
    position: "Bachelor's degree in Software Engineer" ,
    description:"", 
    place: "Tehran, Iran", 
    duration: "2012 - 2016", 
    coursework:["NoSQL Databases","Computer Simulation", "Design Patterns", "Artiﬁcial Intelligence"]
  }
]; 
  constructor() { 
       }

  ngOnInit(): void {

   
  }
      ngAfterViewInit(): void{
      this.onSelect(this.places[0])
    }
  onSelect(hero: Place): void {
    this.selectedPlace = hero;
     var tablinks = document.getElementsByClassName("places");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    
  }
 var evt= document.getElementById("place-"+hero.id);
 if(evt){
  evt.className += " active";
}
}
}

 