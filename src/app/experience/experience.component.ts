import { Component, OnInit } from '@angular/core';
import { Place } from '../place';

import { DataService } from '../data.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {

  selectedPlace?: Place;
 places: Place[]= []

constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.getPlaces();
  }

getPlaces(): void {
  this.places = this.dataService.getPlaces();
}      ngAfterViewInit(): void{
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

 