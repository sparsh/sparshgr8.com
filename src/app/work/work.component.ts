import { Component } from '@angular/core';
import { Resource } from '../app.resource'
@Component({ 
  styleUrls:["/../../styles.scss"],
  templateUrl: './work.component.html',
})
export class WorkComponent {


  constructor(private resource: Resource)
  { 

  }


}
