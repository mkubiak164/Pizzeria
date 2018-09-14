import { Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import {AdressService} from '../adress.service';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})

export class AdressComponent {

    adressData = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      country: new FormControl(),
      street: new FormControl(),
      number: new FormControl(),
      floor: new FormControl()
  });

  constructor(private fb: FormBuilder, private adressService: AdressService) {}

  onSubmit() {
    this.adressService.save(this.adressData.value);
  }

  getAdressData() {
    return this.adressData;
  }

}
