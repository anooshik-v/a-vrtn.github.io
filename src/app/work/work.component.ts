import { Component, OnInit } from '@angular/core';
import { Work } from '../work';
import { DataService } from '../data.service';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.getWorks();
  }

  projects: Work[]=[]

getWorks(): void {
  this.projects = this.dataService.getWorks();
}
}
