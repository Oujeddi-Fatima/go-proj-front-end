import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { Card } from "./card.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html"
})
export class CardComponent implements OnInit {
  card: Card = new Card();
  @Input() title: string = "";
  @Input() titles: string[] = [];
  @Input() attributes: string[] = [];
  @Input() date: string = "";
  @Input() content: any = {};
  @Input() link: string = "";
  @Input() isText: boolean = false;
  @Input() apply: boolean = false;
  @Output() applyEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.card.title = this.title;
    this.card.titles = this.titles;
    this.card.attributes = this.attributes;
    this.card.content = this.content;
    this.card.isText = this.isText;
    this.card.apply = this.apply;
    this.card.links.push(this.link);
  }

  applyJob() {
    this.applyEmitter.emit(this.content);
  }
}
