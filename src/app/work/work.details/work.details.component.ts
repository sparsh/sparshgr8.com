import { Component } from '@angular/core';
import { Resource } from '../../app.resource'
import { WorkComponent } from "../work.component"
import { AppComponent } from "../../app.component"
import {Router} from "@angular/router"
import { WorkDetailModel } from "./work.details.model"
@Component({
  templateUrl: './work.details.component.html',
  providers: [WorkDetailModel]
})
export class WorkDetailsComponent {


  innerWidth: any;
  constructor(private resource: Resource,
  private router: Router,
    private selectedWork: WorkDetailModel,
    private appComponent: AppComponent) {
    console.log("this work is " + JSON.stringify(WorkComponent.selectedWork));

    this.selectedWork = WorkComponent.selectedWork;
    if(this.selectedWork == null)
    {
      this.router.navigate(["home"]);
      return;
    }
    this.appComponent.changeTitleTo(this.selectedWork.title);

    this.innerWidth = (window.screen.width);


      this.router.events.subscribe((event) => {
      this.selectedWork = WorkComponent.selectedWork;
    });
  }


  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }


  getColumnOnBasisOfDeviceWidth() {

    let columns: number = Math.floor(this.innerWidth / 300);
    return columns == 0 ? 1 : columns;


  }

}
