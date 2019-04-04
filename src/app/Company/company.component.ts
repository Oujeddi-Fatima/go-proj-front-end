import { Component, OnInit } from "@angular/core";
import { Company } from "./company.model";
import { AuthenticationService } from "../authentication.service";
import { HttpClientService } from "../http-client.service";
import { Address } from "../address/address.model";
import {
  NgbDateParserFormatter,
  NgbDateStruct
} from "@ng-bootstrap/ng-bootstrap";
import { FormGroup } from "@angular/forms";
import { CompanyStructure } from "./company.structure";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html"
})
export class CompanyComponent implements OnInit {
  companies: Array<Company> = new Array<Company>();
  company: Company = new Company();
  contact: string = "";
  phone: string = "";
  businessType :string="Select..."
  companyStructure: CompanyStructure = new CompanyStructure();
  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClientService,
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) {
    this.getCompaniesforEmployer();
    this.company.employer.userId = this.authService.authModel.user.userId;
  }

  getCompaniesforEmployer() {
    this.httpClient
      .getFromServerHref(this.authService.authModel.user._links.companies.href)
      .subscribe((companies: Array<Company>) => {
        this.authService.authModel.user.company = JSON.parse(JSON.stringify((companies)));
        companies.forEach(company => {
          if (company != null) {
            const formGroup: FormGroup = this.company.formGroup;
            company.formGroup = formGroup;
          }
        });
        this.companies = companies;
      });
  }

  setBusinessType(btv, bto) {
    this.company.businessType = btv;
    this.businessType = bto;
  }

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

    cust.companyId = this.company.companyId;
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
    cust.employer.id = this.authService.authModel.user.userId;
    this.authService.authModel.user.company.push(cust);
    this.company = new Company();
    this.httpClient
      .postToServer("employer", this.authService.authModel.user)
      .subscribe(
        data => {
          console.log(data);
          this.getCompaniesforEmployer();
        },
        err => {
          console.log(err);
          this.getCompaniesforEmployer();
        }
      );
  }
}
