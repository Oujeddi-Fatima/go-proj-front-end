import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Certification } from "./certification.model";
@Component({
  selector: "app-certification",
  templateUrl: "./certification.component.html",
  styleUrls: ["./certification.component.css"]
})
export class CertificationComponent implements OnInit {
  certification: Certification = new Certification();
  @Output() addCertification: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  add() {
    const data: any = {};
    data.id = this.certification.id;
    data.description = this.certification.description;
    data.expirationDate = this.certification.expirationDate;
    data.completionDate = this.certification.completionDate;
    data.link = this.certification.link;
    data.title = this.certification.title;
    this.addCertification.emit(data);
    this.certification = new Certification();
  }
}
