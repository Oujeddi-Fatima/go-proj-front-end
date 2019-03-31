import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { AcademicRecord } from "./academic-record.model";
import { Observable } from "rxjs";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-academic-record",
  templateUrl: "./academic-record.component.html"
})
export class AcademicRecordComponent implements OnInit {
  academicRecord: AcademicRecord = new AcademicRecord();
  @Output() addAcademicRecord: EventEmitter<any> = new EventEmitter();
  constructor(private ngbDateParserFormatter: NgbDateParserFormatter) {}

  private eventsSubscription: any;
  @Input() academicRecordAdded: Observable<any>;
  ngOnInit() {
    this.eventsSubscription = this.academicRecordAdded.subscribe(
      academicRecord => {
        if (academicRecord == "academicRecord") this.add();
      }
    );
  }
  ngOnDestroy() {
    if(this.eventsSubscription)
    this.eventsSubscription.unsubscribe();
  }

  add() {
    const data: any = {};
    data.id = this.academicRecord.id;
    data.school = {};
    data.school.name = this.academicRecord.school;
    data.degree = this.academicRecord.degree;
    data.enrollmentDate = this.ngbDateParserFormatter.format(this.academicRecord.enrollmentDate);
    data.completionDate = this.ngbDateParserFormatter.format(this.academicRecord.completionDate);
    data.major = this.academicRecord.major;
    data.gpa = this.academicRecord.gpa;
    this.addAcademicRecord.emit(data);
    this.academicRecord = new AcademicRecord();
  }
}
