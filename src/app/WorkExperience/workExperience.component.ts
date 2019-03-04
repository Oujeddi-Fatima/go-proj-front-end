import { Component, Injector } from "@angular/core";
import { WorkExperience } from './workExperience.model';
import { ILogger } from '../Utility/logger.component';

@Component({
    //selector:"work-experience",
    templateUrl:"./workExperience.view.html",
    styleUrls: ['./workExperience.component.scss']
})
export class  WorkExperienceComponent{
    workExperience: WorkExperience = new WorkExperience();
    workExperiences: Array<WorkExperience> = new Array<WorkExperience>();
    logger: ILogger;
       constructor(_injector: Injector) {
        this.logger = _injector.get("2");
        this.logger.log();
        this.workExperience.startDate = 'Updated Date';
      }
      addworkExperience() {
        this.workExperiences.push(this.workExperience);
        this.workExperience = new WorkExperience();
      }

      selectworkExperience(_selectedworkExperience: WorkExperience){
        this.workExperience = _selectedworkExperience;
      }
}