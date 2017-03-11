import { Component } from '@angular/core';

@Component({ 
  styleUrls:["/../../styles.scss"],
  templateUrl:'./home.component.html',
})
export class HomeComponent  { 
  

  innerHeight: any;
    innerWidth: any;
    constructor() {
        this.innerHeight = (window.screen.height) + "px";
        this.innerWidth = (window.screen.width) + "px";
    }


    onResize(event:any) {
this.innerWidth =   event.target.innerWidth;
}

}
