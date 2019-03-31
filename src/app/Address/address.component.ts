import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Address } from "./address.model";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html"
})
export class AddressComponent implements OnInit {
  @Output() addAddress: EventEmitter<any> = new EventEmitter();
  private _address: Address = new Address();
  constructor() {}

  ngOnInit() {}
  ngAfterContentInit() {}

  @Input()
  set address(address: Address) {
    if (address == null || address == undefined) {
      this._address = new Address();
    } else {
      this._address = address;
    }
  }

  get address(): Address {
    return this._address;
  }

  add() {
    const data: any = {};
    data.id = this.address.id;
    data.city = this.address.city;
    data.state = this.address.state;
    data.street = this.address.street;
    data.zipCode = this.address.zipCode;
    this.addAddress.emit(data);
  }
}
