import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { WorkExperience } from "./workExperience.model";
@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html"
})
export class WorkExperienceComponent implements OnInit {
  workExperience: WorkExperience = new WorkExperience();
  @Output() addWorkExperience: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  add(){
    const data: any = {};
    data.id = this.workExperience.id;
    data.achievements = this.workExperience.achievements;
    data.company = this.workExperience.company;
    data.finishDate = this.workExperience.finishDate;
    data.isCurrent = this.workExperience.isCurrent;
    data.startDate = this.workExperience.startDate;
    data.tasks = this.workExperience.tasks;
    data.title = this.workExperience.title;
    this.addWorkExperience.emit(data);
    this.workExperience = new WorkExperience();
  }
}
