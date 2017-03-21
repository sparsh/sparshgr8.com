import { Component } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Resource } from '../app.resource'
import { ProgressDialog } from '../healper/progress.dialog/progress.dialog.component';
import { AlertDialog } from '../healper/alert.dialog/alert.dialog.component';
import { AngularFire, FirebaseListObservable, AngularFireDatabase } from 'angularfire2';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ValidationService } from '../validation.service'
@Component({
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  clicked: boolean = false;
  selectedOption: string;
  getInTouch :boolean = true;
  contactRefrence: FirebaseListObservable<any[]>;
  contact: any = {};
  contactForm = new FormGroup({

    "fullName": new FormControl('', [Validators.required]),
    "message": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required, ValidationService.emailValidator])

  });

  constructor(private resource: Resource,
    public dialog: MdDialog,
    af: AngularFire) {
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


