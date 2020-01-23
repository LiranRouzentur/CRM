import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Customer } from "../../models/customer";
import { CustomersService } from "../../services/customers.service";
import { CountriesService } from "../../services/countries.service";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;
  headerDescription: string;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  notes: string = '';
  countries: any;

  constructor(
    private customerService: CustomersService,
    private countriesService: CountriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.headerTitle = 'Add New Customer Form';
    this.headerIcon = 'fas fa-plus-circle';
    this.headerDescription = 'Write customer details';
    this.countriesService.getCountries()
      .then(countries => this.countries = countries)
      .catch(err => console.log(err));
  }

  onSubmit({ value, valid }: { valid: boolean, value: Customer }): void {

    if (valid) {

      this.customerService.addCustomer(value);
      this.router.navigate(['/customers']);
    }

  }

}