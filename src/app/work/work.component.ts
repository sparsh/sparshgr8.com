import { Component } from '@angular/core';
import { Resource } from '../app.resource'
@Component({

  moduleId: module.id,
  templateUrl: './work.component.html',
})
export class WorkComponent {


  constructor(private resource: Resource)
  { 

  }


}
