import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { ResumeCard } from "./resume-card.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-resume-card",
  templateUrl: "./resume-card.component.html"
})
export class ResumeCardComponent implements OnInit {
  card: ResumeCard = new ResumeCard();
  @Input() titles: string[] = [];
  @Input() attributes: string[] = [];
  @Input() date: string = "";
  @Input() content: any = {};
  @Input() link: string = "";
  @Input() editable: boolean;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.card.titles = this.titles;
    this.card.attributes = this.attributes;
    this.card.content = this.content;
    this.card.links.push(this.link);
    this.card.editable = this.editable;
  }

  deleteContent() {
    this.delete.emit(this.content);
  }
}
