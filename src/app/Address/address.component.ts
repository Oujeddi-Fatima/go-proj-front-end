import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Address } from "./address.model";
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

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

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
}
