import { Component, OnInit, Output, EventEmitter, Input} from "@angular/core";
import { Address } from './address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {
  @Output() addAddress: EventEmitter<any> = new EventEmitter();
  @Input()
  address:Address = new Address();
  constructor() { }

  ngOnInit() {
  }

  add(){
    const data: any = {};
    data.id = this.address.id;
    data.city = this.address.city;
    data.state = this.address.state;
    data.street = this.address.street;
    data.zipCode = this.address.zipCode;
    this.addAddress.emit(data);
  }
}
