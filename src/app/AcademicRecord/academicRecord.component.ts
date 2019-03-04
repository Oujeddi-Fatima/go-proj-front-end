import { Component, Injector } from '@angular/core';
import { AcademicRecord } from './academicRecord.model';
import { ILogger } from '../Utility/logger.component';

@Component({
    //selector:"academic-record",
    templateUrl: './academicRecord.view.html',
    styleUrls: ['./academicRecord.component.scss']
})
export class  AcademicRecordComponent{
    academicRecord: AcademicRecord = new AcademicRecord();
    academicRecords: Array<AcademicRecord> = new Array<AcademicRecord>();
    logger: ILogger;
    constructor(_injector: Injector) {
      this.logger = _injector.get("2");
      this.logger.log();
      this.academicRecord.schoolName= 'updated schoolName';
}
addAcademicRecord() {
    this.academicRecords.push(this.academicRecord);
    this.academicRecord = new AcademicRecord();
  }

selectAcademicRecord(_selectedacademicRecord: AcademicRecord){
    this.academicRecord = _selectedacademicRecord;
  }
}