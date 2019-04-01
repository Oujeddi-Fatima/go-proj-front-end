import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { User } from "../account/account.model";
import { Address } from "../address/address.model";

export class SearchJob {
  companyId: string = "";
  name: string = "";
  infoNumber: string = "";
  primeObjective: string = "";
  vision: string = "";
  mission: string = "";
  startDate: any = "";
  fax: string = "";
  businessType: string = "";
  phone: Array<string> = new Array<string>();
  contacts: Array<string> = new Array<string>();
  address: Address = new Address();
  employer: User = new User();

  formGroup: FormGroup = null;
  constructor() {
    var _builder = new FormBuilder();
    this.formGroup = _builder.group({});

    this.formGroup.addControl(
      "", //field name
      new FormControl("", Validators.required)
    );
  }

  public getData() {
    const cust: any = {};
    cust.companyId = this.companyId;
    cust.name = this.name;
    cust.startDate = this.startDate.year
      ? this.startDate.year
      : "" + "-" + this.startDate.month
      ? this.startDate.month
      : "" + "-" + this.startDate.day
      ? this.startDate.day
      : "";
    cust.businessType = this.businessType;
    cust.primeObjective = this.primeObjective;
    cust.mission = this.mission;
    cust.vision = this.vision;
    cust.infoNumber = this.infoNumber;
    cust.contacts = this.contacts;
    cust.fax = this.fax;
    cust.phone = this.phone;
    cust.address = this.address.getData();
    cust.employer = {};
    cust.employer.userId = this.employer.userId;
    return cust;
  }
}
