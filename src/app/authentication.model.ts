import {
    NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
  } from "@angular/forms";
  
  export class authenticationModel {
    userId:String = "";
    formGroup: FormGroup = null;
    username: String;
    password: String = "";
    isEmployer: boolean= false;
    isAuthenticated: boolean= false;
    user:any;
    constructor() {
      var _builder = new FormBuilder();
      this.formGroup = _builder.group({});
    }
  }