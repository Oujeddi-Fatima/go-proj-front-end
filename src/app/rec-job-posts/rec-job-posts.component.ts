import { Component, OnInit } from "@angular/core";
import { RecJobPost } from "./rec-job-posts.model";
import { Address } from "../address/address.model";
import { Skill } from "../skill/skill.model";
import { Question } from "../question/question.model";

@Component({
  selector: "app-rec-job-posts",
  templateUrl: "./rec-job-posts.component.html"
})
export class RecJobPostsComponent implements OnInit {
  recJobPost: RecJobPost = new RecJobPost();

  constructor() {}

  ngOnInit() {}

  addAddress(address: Address) {
    this.recJobPost.address = address;
  }
  addSkill(skill: Skill) {
    this.recJobPost.skill.push(skill);
  }
  addQuestions(question: Array<Question>) {
    this.recJobPost.questions.concat(question);
  }
}
