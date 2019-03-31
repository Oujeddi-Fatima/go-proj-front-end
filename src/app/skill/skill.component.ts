import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Skill } from "./skill.model";
import { Observable } from "rxjs";
@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html"
})
export class SkillComponent implements OnInit {
  skill: Skill = new Skill();
  private eventsSubscription: any;
  constructor() {}
  @Output() addSkill: EventEmitter<any> = new EventEmitter();
  @Input() skillAdded: Observable<any>;
  ngOnInit() {
    this.eventsSubscription = this.skillAdded.subscribe(skill => {
      if(skill == 'skill')
      this.add();
    });
  }
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }
  add() {
    const data: any = {};
    data.id = this.skill.id;
    data.skill = this.skill.skill;
    this.addSkill.emit(data);
    this.skill = new Skill();
  }
}
