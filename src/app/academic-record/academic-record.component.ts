import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AcademicRecord } from "./academic-record.model";
@Component({
  selector: "app-academic-record",
  templateUrl: "./academic-record.component.html"
})
export class AcademicRecordComponent implements OnInit {
  academicRecord: AcademicRecord = new AcademicRecord();
  @Output() addAcademicRecord: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  add() {
    const data: any = {};
    data.id = this.academicRecord.id;
    data.school = this.academicRecord.school;
    data.degree = this.academicRecord.degree;
    data.enrollmentDate = this.academicRecord.enrollmentDate;
    data.completionDate = this.academicRecord.completionDate;
    data.major = this.academicRecord.major;
    data.gpa = this.academicRecord.gpa;
    this.addAcademicRecord.emit(data);
    this.academicRecord = new AcademicRecord();
  }
}
