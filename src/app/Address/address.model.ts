import {
    NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
  } from "@angular/forms";
  
  export class Address {
    id: String;
    street: String = "";
    city: String = "";
    state: String = "";
    zipCode: String = "";
    
  
    formGroup: FormGroup = null;
    constructor() {
      var _builder = new FormBuilder();
      this.formGroup = _builder.group({});
  
      this.formGroup.addControl(
        "",
        new FormControl("", Validators.required)
      );
      this.formGroup.addControl(
        "",
        new FormControl("", Validators.required)
      );
      this.formGroup.addControl(
        "",
        new FormControl("", Validators.required)
      );
      var validationCollection = [];
      validationCollection.push(Validators.required);
    }
  }