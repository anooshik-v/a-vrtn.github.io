import { Component, OnInit } from '@angular/core';
import { Work } from '../work';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects: Work[]=[
  {
      name: "Wedding Bot and Admin Panel",
      description:"",
      year:"2021",
      technologies:["Java","Telegram API", "MySQL", "Angular", "Heroku Deployment"]
  },
  {
      name: "Customers and Shops Connecting Application ",
      description:"",
      year:"2021",
      technologies:["Java","Stripe Payment", "MySQL", "Angular", "Azure Deployment"]
  },
  {
      name: "Customers and Shops Connecting App ",
      description:"",
      year:"2021",
      technologies:["Java","Google Payments","Apple Payments", "MySQL", "Angular", "AWS Deployment"]
  },
  {
      name: "Youth Engagement App",
      description:"",
      year:"2021",
      technologies:["Java","Telegram API", "MySQL", "Angular", "Heroku Deployment"]
  },
  {
      name: "Barcode App",
      description:"",
      year:"2021",
      technologies:["Angular"]
  },
    {
      name: "Request and Task Management for Internal and External Requests",
      description:"",
      year:"2021",
      technologies:["Java","AngularJS", "VPS Setup and Tomcat Deployment"]
  },
    {
      name: "Bank Mobile Application and Admin Portal",
      description:"",
      year:"2018",
      technologies:["Java","Bootstrap"]
  }
  
  ]

}
