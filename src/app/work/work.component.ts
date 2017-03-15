import { Component } from '@angular/core';
import { Resource } from '../app.resource'
import {Router} from '@angular/router'
@Component({ 
  
  templateUrl: './work.component.html',
})
export class WorkComponent {

  innerWidth: any;
  constructor(private resource: Resource,
              private router: Router)
  { 


    this.innerWidth = (window.screen.width);
  }

  openWorkDetails(index:number)
  {
    this.router.navigate(['workDetailsInner/' + index]);
  }


    getColumnOnBasisOfDeviceWidth() {

    let columns : number = Math.floor(this.innerWidth/300);
    return columns == 0 ? 1 : columns;


  }

     onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }


}
