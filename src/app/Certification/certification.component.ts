import { Component, Injector } from "@angular/core";
import { Certification } from './certification.model';
import { ILogger } from '../Utility/logger.component';
@Component({
    //selector:"certification",
    templateUrl:"./certification.view.html",
    styleUrls: ['./certification.component.scss']
})
export class CertificationComponent {
    certification: Certification = new Certification();
    certifications: Array<Certification> = new Array<Certification>();
    logger: ILogger;
       constructor(_injector: Injector) {
        this.logger = _injector.get("2");
        this.logger.log();
        this.certification.title= 'Updated Title';
      }

      addCertification() {
        this.certifications.push(this.certification);
        this.certification = new Certification();
      }
    
    selectCertification(_selectedcertification: Certification){
        this.certification = _selectedcertification;
      }
}