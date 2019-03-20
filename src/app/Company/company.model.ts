import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { User } from "../account/account.model";
import { Address } from "../address/address.model";

export class Company {
  id: string = "";
  name: string = "";
  infoNumber: string = "";
  primeObjective: string = "";
  vision: string = "";
  mission: string = "";
  startDate: string = "";
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
}
