import { Component } from '@angular/core';
import { Resource } from '../app.resource'
import {Router} from '@angular/router'
@Component({ 
  
  templateUrl: './work.component.html',
})
export class WorkComponent {

  constructor(private resource: Resource,
              private router: Router)
  { 

  }

  openWorkDetails(index:number)
  {
    this.router.navigate(['workDetailsInner/' + index]);
  }

}
