import { Component } from '@angular/core';
import { Resource } from '../app.resource'
import { Router } from '@angular/router'
import { MdDialog, MdDialogRef } from '@angular/material';
import { ProgressDialog } from '../healper/progress.dialog/progress.dialog.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AlertDialog } from '../healper/alert.dialog/alert.dialog.component';
@Component({

  templateUrl: './work.component.html',
})
export class WorkComponent {
  workDetailsArray: FirebaseListObservable<any>[];
  innerWidth: any;
  url: any;
  static selectedWork: any;
  constructor(private resource: Resource,
    af: AngularFire,
    dialog: MdDialog,
    private router: Router) {

    let dialogRef = dialog.open(ProgressDialog);
    af.database.list('/workDetailsArray').subscribe(
      data => {
        this.workDetailsArray = data;

        dialogRef.close();
      },
      error => {
        console.log("some error occured while getting data");
        dialogRef.close();
      }
    );
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

    if (this.url.indexOf("Inner") > -1)
      return 1;
    let columns: number = Math.floor(this.innerWidth / 300);
    return columns == 0 ? 1 : columns;


  }

  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }

}
