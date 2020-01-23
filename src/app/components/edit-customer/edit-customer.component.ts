import { Component, OnInit } from '@angular/core';
import { Customer } from "../../models/customer";
import { CustomersService } from "../../services/customers.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;
  headerDescription: string;
  id: string = '';
  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  }

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.headerTitle = 'Edit Customer';
    this.headerIcon = 'fas fa-pen';
    this.headerDescription = 'This is the customer edit page';
    this.id = this.activatedRoute.snapshot.params['id'];
    this.customersService.getCustomer(this.id).subscribe(customer => this.customer = customer);
  }

  onSubmit({ value, valid }: { value: Customer, valid: boolean }): void {

    if (valid) {
      value.id = this.id;
      this.customersService.updateCustomer(value);
      this.router.navigate(['/customers']);
    }

  }

}
