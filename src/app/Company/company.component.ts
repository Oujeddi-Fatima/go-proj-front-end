import { Component, Injector } from "@angular/core";
import { Company } from './company.model';
import { ILogger } from '../Utility/logger.component';


@Component({
    //selector:"company",
    templateUrl:"./company.view.html",
    styleUrls: ['./company.component.scss']
})
export class  CompanyComponent{
    company: Company = new Company();
    companies: Array<Company> = new Array<Company>();
    logger: ILogger;
       constructor(_injector: Injector) {
        this.logger = _injector.get("2");
        this.logger.log();
        this.company.name= 'Updated name';
      }
      addCompany() {
        this.companies.push(this.company);
        this.company = new Company();
      }

      selectCompany(_selectedcompany: Company){
        this.company = _selectedcompany;
      }
}
