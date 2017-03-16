import { Component } from '@angular/core';
import { Resource } from '../app.resource'
import { Router } from '@angular/router'

import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({

  templateUrl: './work.component.html',
})
export class WorkComponent {
  workDetailsArray: FirebaseListObservable<any>;
  innerWidth: any;
  url: any;
  static selectedWork: any;
  constructor(private resource: Resource,
    af: AngularFire,
    private router: Router) {
    this.workDetailsArray = af.database.list('/workDetailsArray');
    this.url = this.router.url;
    this.innerWidth = (window.screen.width);

    this.router.events.subscribe((event) => {
      this.url = this.router.url;
    });
  }

  openWorkDetails(work) {
    WorkComponent.selectedWork = work;
    this.router.navigate(['work/workDetailsInner/' + work.id]);
  }


  getColumnOnBasisOfDeviceWidth() {

    if(this.url.indexOf("Inner") > -1)
    return 1;
    let columns: number = Math.floor(this.innerWidth / 300);
    return columns == 0 ? 1 : columns;


  }

  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }

}
