import { Component } from '@angular/core';

import { Router } from '@angular/router'
import { Resource } from '../app.resource'
@Component({ 
  styleUrls:["/../../styles.scss"],
  selector: 'app-tab',
  
  templateUrl: './tab.component.html',
})
export class TabComponent {

constructor(private resource:Resource,
private router: Router,)
{

}

   goToRouteLink(path: string) {
    this.router.navigate(["./" + path]);
  }

}
