import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Certification } from "./certification.model";
import { Observable } from "rxjs";
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: "app-certification",
  templateUrl: "./certification.component.html",
  styleUrls: ["./certification.component.css"]
})
export class CertificationComponent implements OnInit {
  certification: Certification = new Certification();
  @Output() addCertification: EventEmitter<any> = new EventEmitter();
  ;
  constructor(private ngbDateParserFormatter: NgbDateParserFormatter) {}

  private eventsSubscription: any;
  @Input() certificationAdded: Observable<any>;
  ngOnInit() {
    this.eventsSubscription = this.certificationAdded.subscribe(certification => {
      if (certification == "certification") this.add();
    });
  }
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }
  add() {
    const data: any = {};
    data.id = this.certification.id;
    data.description = this.certification.description;
    data.expirationDate = this.ngbDateParserFormatter.format(this.certification.expirationDate);
    data.completionDate = this.ngbDateParserFormatter.format(this.certification.completionDate);
    data.link = this.certification.link;
    data.title = this.certification.title;
    this.addCertification.emit(data);
    this.certification = new Certification();
  }
}
