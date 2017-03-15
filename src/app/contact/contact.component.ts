import { Component } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Resource } from '../app.resource'

import { MdDialog, MdDialogRef } from '@angular/material';
import { ValidationService } from '../validation.service'
@Component({ 
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  clicked: boolean = false;
  selectedOption: string;
  contactForm = new FormGroup({

    "fullName": new FormControl('', [Validators.required]),
    "message": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required, ValidationService.emailValidator])

  });

  constructor(private resource: Resource,
    public dialog: MdDialog) {

  }

  submitContactValuesToServer() {
    this.clicked = true;
    if (this.contactForm.valid) {

      let dialogRef = this.dialog.open(DialogResultExampleDialog, {
     
      });
      //submit values to server
      //  this.contactForm.reset();
      this.clicked = false;
    }
  }

}


@Component({ 
  
  selector: 'dialog-result-example-dialog',
  
  templateUrl: './contact.submit.alert.html',
})
export class DialogResultExampleDialog {
  constructor(private resource: Resource,
  public dialogRef: MdDialogRef<DialogResultExampleDialog>) { }
}
