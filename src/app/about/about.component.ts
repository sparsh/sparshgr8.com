import { Component } from '@angular/core';
import {Resource} from '../app.resource'
@Component({
  
  moduleId: module.id,
  styles:[`#container {
    position:relative;
}

#img2 {
    position: absolute;
    left: 50px;
    top: 50px;
}`],


  templateUrl: './about.component.html',
})
export class AboutComponent {

constructor(private resource:Resource)
{
  
}

openLink(link:string)
{
  console.log("link is " + link);


  var win = window.open(link, '_blank');
  win.focus();
}

 

}
