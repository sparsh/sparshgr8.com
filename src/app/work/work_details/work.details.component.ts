import { Component } from '@angular/core';
import { Resource } from '../../app.resource'
import { WorkComponent } from "../work.component"
import { AppComponent } from "../../app.component"

import { ActivatedRoute } from '@angular/router'
@Component({
  templateUrl: './work.details.component.html',
})
export class WorkDetailsComponent {

  workModel: any;


  constructor(private resource: Resource,

    private route: ActivatedRoute,
    private appComponent: AppComponent) {
    this.appComponent.changeTitleTo("hello world");

    console.log("Id is " + this.route.snapshot.params['id']);
    
    //this.workModel = this.resource.workDetailsArray[WorkComponent.index];

  }


}
