import { Component } from '@angular/core';
import { Resource } from '../app.resource'
@Component({

  moduleId: module.id,
  templateUrl: './work.component.html',
})
export class WorkComponent {


  colors = ["#80CBC4","#FFCC80","#FFAB91"];
  constructor(private resource: Resource)
  { 

  }


}
