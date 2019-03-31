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

    public getData() : any{
      const data: any = {};
      data.id = this.id;
      data.city = this.city;
      data.state = this.state;
      data.street = this.street;
      data.zipCode = this.zipCode;
      return data;
    }
  }