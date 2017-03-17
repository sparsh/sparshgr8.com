import { Component } from '@angular/core';
import { Resource } from '../../app.resource'
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({ 
  
  selector: 'progressDialog',
  
  templateUrl: './progress.dialog.component.html',
})
export class ProgressDialog {
  constructor(private resource: Resource,
  public dialogRef: MdDialogRef<ProgressDialog>) { }
}
