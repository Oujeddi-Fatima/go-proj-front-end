import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { WorkExperience } from "./workExperience.model";
import { Observable } from "rxjs";
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html"
})
export class WorkExperienceComponent implements OnInit {
  workExperience: WorkExperience = new WorkExperience();
  @Output() addWorkExperience: EventEmitter<any> = new EventEmitter();
  constructor(private ngbDateParserFormatter: NgbDateParserFormatter) {}

  private eventsSubscription: any;
  @Input() workExperienceAdded: Observable<any>;
  ngOnInit() {
    this.eventsSubscription = this.workExperienceAdded.subscribe(workExperience => {
      if (workExperience == "workExperience") this.add();
    });
  }
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  add() {
    const data: any = {};
    data.id = this.workExperience.id;
    data.achievements = this.workExperience.achievements;
    data.company = this.workExperience.company;
    data.finishDate =this.ngbDateParserFormatter.format(this.workExperience.finishDate);
    data.isCurrent = this.workExperience.isCurrent;
    data.startDate = this.ngbDateParserFormatter.format(this.workExperience.startDate);
    data.tasks = this.workExperience.tasks;
    data.title = this.workExperience.title;
    this.addWorkExperience.emit(data);
    this.workExperience = new WorkExperience();
  }
}
