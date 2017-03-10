import { Component } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Resource} from '../app.resource'
import { ValidationService } from '../validation.service'
@Component({
  
  moduleId: module.id,
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  clicked :boolean = false;
   contactForm = new FormGroup({
   
        "fullName": new FormControl('', [Validators.required]),
        "message": new FormControl('', [Validators.required]),
        "email": new FormControl('', [Validators.required, ValidationService.emailValidator])

    });

constructor(private resource:Resource,)
{
  
}

submitContactValuesToServer()
{
  this.clicked = true;
  if(this.contactForm.valid)
  {
    //submit values to server
    this.contactForm.reset();

  }
}

}
