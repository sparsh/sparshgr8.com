import { Component } from '@angular/core';
import { Resource } from '../../app.resource'
import { WorkComponent } from "../work.component"
import { AppComponent } from "../../app.component"
import { WorkDetailModel } from "./work.details.model"
@Component({
  templateUrl: './work.details.component.html',
  providers:[WorkDetailModel]
})
export class WorkDetailsComponent {

  constructor(private resource: Resource,
    private selectedWork: WorkDetailModel,
    private appComponent: AppComponent) {
    console.log("this work is " + JSON.stringify(WorkComponent.selectedWork));
   
    this.selectedWork = WorkComponent.selectedWork;
 this.appComponent.changeTitleTo(this.selectedWork.title);


  }


}
