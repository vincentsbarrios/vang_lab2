import { Activities } from './model/activities';
import { Component, OnInit } from '@angular/core';
import { state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activitiesItem: Array<Activities>
  selectActivity: Activities;

  constructor () {}

  ngOnInit(): void {
    this.activitiesItem = 
    [
      {
        id: 1,
        name: "Science Notebbok Exercise.",
        description: "Book of science page 13 exercise from 5 - 28.",
        state: "Pending",
        estimateTime: "2 days"
      }
    ]
  }

  onClick(activ : Activities) : void {
    this.selectActivity = activ;
  }
}
