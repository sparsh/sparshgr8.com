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
  var win = window.open(link, '_blank');
  win.focus();
}

   downloadResume() {
     const file_url = 'https://firebasestorage.googleapis.com/v0/b/sparshgr8-eb16c.appspot.com/o/sparsh%20-%20web%20and%20mobile%20application%20developer.pdf?alt=media&token=37da31c5-4dd3-4110-8dea-e1beb139cea5';
   var el = document.createElement('a');
   el.download = file_url;
   el.href = file_url;
   document.body.appendChild(el);
   el.click();
   el.remove();
  }

}
