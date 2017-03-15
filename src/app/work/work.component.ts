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
  static selectedWork :any;
  constructor(private resource: Resource,
    af: AngularFire,
    private router: Router) {
    this.workDetailsArray = af.database.list('/workDetailsArray');

    this.innerWidth = (window.screen.width);
  }

  openWorkDetails(work) {
    WorkComponent.selectedWork = work;
    this.router.navigate(['workDetailsInner']);
  }


  getColumnOnBasisOfDeviceWidth() {

    let columns: number = Math.floor(this.innerWidth / 300);
    return columns == 0 ? 1 : columns;


  }

  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }


}
