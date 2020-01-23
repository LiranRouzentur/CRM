import { Component, OnInit } from '@angular/core';
import { Customer } from "../../models/customer";
import { CustomersService } from "../../services/customers.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;
  headerDescription: string;
  customer: Customer = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  };

  constructor(
    private customersService: CustomersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.headerTitle = 'Customers Details';
    this.headerIcon = 'fas fa-user';
    this.headerDescription = 'View All Customer Details';
    const id = this.activatedRoute.snapshot.params['id'];
    this.customersService.getCustomer(id).subscribe((customer: Customer) =>
      this.customer = customer
    );
  }

}
