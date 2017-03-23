import { Component } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Resource } from '../app.resource'
import { ProgressDialog } from '../healper/progress.dialog/progress.dialog.component';
import { AlertDialog } from '../healper/alert.dialog/alert.dialog.component';
import { AngularFire, FirebaseListObservable, AngularFireDatabase } from 'angularfire2';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ValidationService } from '../validation.service'
import { PushNotificationService } from '../pushNotification/push.service'
@Component({
  templateUrl: './contact.component.html',
  providers: [PushNotificationService]
})
export class ContactComponent {
  clicked: boolean = false;
  selectedOption: string;
  getInTouch: boolean = true;
  contactRefrence: FirebaseListObservable<any[]>;
  contact: any = {};
  regTokenArray: any = [];
  contactForm = new FormGroup({

    "fullName": new FormControl('', [Validators.required]),
    "message": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required, ValidationService.emailValidator])

  });

  constructor(private resource: Resource,
    public dialog: MdDialog,
    public pushService: PushNotificationService,
    af: AngularFire) {

    af.database.list('/regToken').subscribe(
      data => {
        if (data) {
          for (var i = 0; i < data.length; i++) 
            this.regTokenArray.push(data[i].regToken);
          console.log(JSON.stringify(this.regTokenArray));
        }
      },
      error => {
        console.log("some error occured while getting data");

      }
    );
    this.contactRefrence = af.database.list('/contacts');
  }

  submitContactValuesToServer(contact) {

    contact.time = +new Date();
    this.clicked = true;
    if (this.contactForm.valid) {

      this.contactRefrence.push(contact);

      let dialogRef = this.dialog.open(AlertDialog);

      if (navigator.onLine) {
        dialogRef.componentInstance['message'] = this.resource.contactSendSuccess;
        if (this.regTokenArray) {
          this.pushService.postLandAssetFutureData(this.contact, this.regTokenArray);
        }
        this.contactForm.reset();
      }
      else
        dialogRef.componentInstance['message'] = this.resource.error;
      //submit values to server

      this.clicked = false;
    }
  }



  openLink(link: string) {
    var win = window.open(link, '_blank');
    win.focus();
  }


}


