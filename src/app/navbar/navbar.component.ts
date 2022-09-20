import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(id : string) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    if(el)
    el.scrollIntoView({behavior:"smooth"});
  }
}
