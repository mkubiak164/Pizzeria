import { Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})

export class AdressComponent {

    adressForm = this.fb.group({
      name: [''],
      lastName: [''],
      phone: [''],
      email: [''],
      country: [''],
      street: [''],
      number: [''],
      floor: ['']
    });

    constructor(private fb: FormBuilder) {  }

    addAdress() {
      this.adressForm.patchValue({
        name: [''],
        lastName: [''],
        phone: [''],
        email: [''],
        country: [''],
        street: [''],
        number: [''],
        floor: ['']
      });
    }

    onSubmit() {
      console.warn(this.adressForm.value);
    }

}
