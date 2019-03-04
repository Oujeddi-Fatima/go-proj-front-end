import { Component, Injector } from '@angular/core';
import { Address } from './address.model';
import { ILogger } from '../Utility/logger.component';


@Component({
    // selector:"address",
    templateUrl: './address.view.html',
    styleUrls: ['./address.component.scss']
})
export class  AddressComponent {
    address: Address = new Address();

    addresses: Array<Address> = new Array<Address>();
    logger: ILogger;

       constructor(_injector: Injector) {

        this.logger = _injector.get("2");
        this.logger.log();
        this.address.street = 'updated street';
      }
      addAddress() {
        this.addresses.push(this.address);
        this.address = new Address();
      }

      selectAddress(_selectedAddress: Address){
        this.address = _selectedAddress;
      }
}

