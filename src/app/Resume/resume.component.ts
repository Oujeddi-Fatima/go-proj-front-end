import { Component, Injector } from '@angular/core';
import { Resume } from './resume.model';
import { ILogger } from '../Utility/logger.component';

@Component({
  //selector:"resume",
  templateUrl: './resume.view.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  resume: Resume = new Resume();
  resumes: Array<Resume> = new Array<Resume>();
  logger: ILogger;
  constructor(_injector: Injector) {
    this.logger = _injector.get("2");
    this.logger.log();
    this.resume.title = "updated resume";
  }
  addResume() {
    this.resumes.push(this.resume);
    this.resume = new Resume();
    //TODO - add a resume to the user
  }

  selectResume(_selectedResume: Resume){
    this.resume = _selectedResume;
  }
}
