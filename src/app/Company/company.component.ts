import { Component, OnInit } from "@angular/core";
import { Company } from "./company.model";
import { AuthenticationService } from "../authentication.service";
import { HttpClientService } from "../http-client.service";
import { Address } from "../address/address.model";
import {
  NgbDateParserFormatter,
  NgbDateStruct
} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-company",
  templateUrl: "./company.component.html"
})
export class CompanyComponent implements OnInit {
  company: Company = new Company();
  contact: string = "";
  phone: string = "";
  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClientService,
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) {}

  ngOnInit() {}

  addAddress(address: Address) {
    this.company.address = address;
  }

  save() {
    this.postToServer();
  }

  addContact() {
    this.company.contacts.push(this.contact);
    this.contact = "";
  }

  addPhone() {
    this.company.phone.push(this.phone);
    this.phone = "";
  }

  postToServer() {
    let ngbDate: any = this.company.startDate;
    let startDate = this.ngbDateParserFormatter.format(ngbDate);
    const cust: any = {};

    cust.id = this.company.id;
    cust.name = this.company.name;
    cust.startDate = startDate;
    cust.businessType = this.company.businessType;
    cust.primeObjective = this.company.primeObjective;
    cust.mission = this.company.mission;
    cust.vision = this.company.vision;
    cust.infoNumber = this.company.infoNumber;
    cust.contacts = this.company.contacts;
    cust.fax = this.company.fax;
    cust.phone = this.company.phone;
    cust.address = this.company.address;
    cust.employer = {};
    cust.employer.id = this.company.employer.userId;

    this.httpClient
      .postToServer("company", cust)
      .subscribe(data => console.log(data), err => console.log(err));
  }
}
