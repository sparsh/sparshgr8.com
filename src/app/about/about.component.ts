import { Component } from '@angular/core';
import {Resource} from '../app.resource'
@Component({ 
  styleUrls:["/../../styles.scss"],
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
