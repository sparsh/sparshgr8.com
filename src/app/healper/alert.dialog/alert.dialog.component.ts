import { Component } from '@angular/core';
import { Resource } from '../../app.resource'
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({ 
  
  selector: 'alertDialog',

  templateUrl: './alert.dialog.component.html',
})
export class AlertDialog {
        message : String;
  constructor(private resource: Resource,

  public dialogRef: MdDialogRef<AlertDialog>) { }
}
