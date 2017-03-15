import { Component } from '@angular/core';

import { Resource } from '../app.resource'
@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {


  innerHeight: any;
  innerWidth: any;
  constructor(private resource: Resource) {
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);
  }


  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }


  getColumnOnBasisOfDeviceWidth() {

    let columns : number = Math.floor(this.innerWidth/400);
    return columns == 0 ? 1 : columns;


  }

}
