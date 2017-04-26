import { Component } from '@angular/core';
import { Resource } from '../../app.resource'
import { WorkComponent } from "../work.component"
import { AppComponent } from "../../app.component"
import { Router } from "@angular/router"
import { WorkDetailModel } from "./work.details.model"

import { AngularFire, FirebaseListObservable } from 'angularfire2';
declare var ga: Function;
@Component({
  templateUrl: './work.details.component.html',
  providers: [WorkDetailModel]
})
export class WorkDetailsComponent {


  innerWidth: any;
  constructor(private resource: Resource,
    af: AngularFire,
    private router: Router,
    private selectedWork: WorkDetailModel,
    private appComponent: AppComponent) {

    this.selectedWork = WorkComponent.selectedWork;
    if (this.selectedWork == null) {
      this.router.navigate(["work"]);
      return;
    }


    this.appComponent.changeTitleTo(this.selectedWork.title);

    this.innerWidth = (window.screen.width);


    this.router.events.subscribe((event) => {
      this.selectedWork = WorkComponent.selectedWork;
      this.appComponent.changeTitleTo(this.selectedWork.title);

      ga('send', {
        hitType: 'event',
        eventCategory: 'Work Hit',
        eventAction: 'Hit',
        eventLabel: "Detail Page " + this.selectedWork.title
      });

    });

    ga('set', 'page', "WorkDetailsComponent" + " " + this.selectedWork.title);
    ga('send', 'pageview')


  }


  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }


  getColumnOnBasisOfDeviceWidth() {

    let columns: number = Math.floor(this.innerWidth / 300);
    return columns == 0 ? 1 : columns;


  }

}
