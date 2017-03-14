import { Component } from '@angular/core';

import { Resource } from '../app.resource'
@Component({
  styleUrls: ["/../../styles.scss"],
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

 
    return Math.floor(this.innerWidth/400);


  }

}
