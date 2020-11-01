import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Activities } from '../model/activities';

@Component({
  selector: 'app-activitylist',
  templateUrl: './activitylist.component.html',
  styleUrls: ['./activitylist.component.css']
})
export class ActivitylistComponent implements OnInit {
  activitiesItem: Array<Activities>
  selectActivity: Activities;

  


  constructor() { }

  ngOnInit(): void {


    this.activitiesItem = 
    [
      {
        id: 1,
        name: "Science Notebook Exercise.",
        description: "Book of science page 13 exercise from 5 - 28.",
        state: "Pending",
        estimateTime: "2 days"
      },
      {
        id: 2,
        name: "Complete Orga Exercise",
        description: "Check online videos",
        state: "Inprogress",
        estimateTime: "12 days"
      },
      {
        id: 3,
        name: "Math Exercise",
        description: "Complete exercise chapter 3",
        state: "Done",
        estimateTime: "4 days"
      },
      {
        id: 4,
        name: "Data Science Coursera",
        description: "Complete Coursera",
        state: "Inprogress",
        estimateTime: "10 days"
      },
      {
        id: 5,
        name: "Vanguardia Project",
        description: "Complete project",
        state: "Done",
        estimateTime: "2 days"
      }
    ]
  }

  onClick(activ : Activities) : void {
    this.selectActivity = activ;
  }

  selectChangeHandler(event: any){
    this.selectActivity.state = event.target.value;
  }



}


