import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Skill } from "./skill.model";
@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html"
})
export class SkillComponent implements OnInit {
  skill: Skill = new Skill();
  constructor() {}
  @Output() addSkill: EventEmitter<any> = new EventEmitter();
  ngOnInit() {}

  add(){
    
    const data: any = {};
    data.id = this.skill.id;
    data.skill = this.skill.skill;
    this.addSkill.emit(data);
    this.skill = new Skill();
  }
}
