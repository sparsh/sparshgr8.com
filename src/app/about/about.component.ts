import { Component } from '@angular/core';
import {Resource} from '../app.resource'
@Component({ 
  templateUrl: './about.component.html',
})
export class AboutComponent {

  innerWidth: any;
  constructor(private resource: Resource) {
    this.innerWidth = (window.screen.width);
  }


  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }

openLink(link:string)
{
  console.log("link is " + link);


  var win = window.open(link, '_blank');
  win.focus();
}

 

}
