import { Component, OnInit } from "@angular/core";
import { RecJobPost } from "./rec-job-posts.model";
import { Address } from "../address/address.model";
import { Skill } from "../skill/skill.model";
import { Question } from "../question/question.model";
import { HttpClientService } from "../http-client.service";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { formatDate } from "@angular/common";
import { Subject } from "rxjs";
import { SkillStructure } from "../skill/skill.structure";

@Component({
  selector: "app-rec-job-posts",
  templateUrl: "./rec-job-posts.component.html"
})
export class RecJobPostsComponent implements OnInit {
  recJobPost: RecJobPost = new RecJobPost();
  savedRecJobPost : Array<RecJobPost> = new Array<RecJobPost>();
  private eventsSubject: Subject<any> = new Subject<any>();
  skillStructure: SkillStructure = new SkillStructure();
  emitEventToChild(event) {
    this.eventsSubject.next(event);
  }

  constructor(
    private httpClient: HttpClientService,
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) {

  }

  ngOnInit() {}

  addAddress(address: Address) {
    this.recJobPost.address = address;
  }
  addSkill(skill: Skill) {
    this.recJobPost.skill.push(skill);
    console.log(this.recJobPost.skill);
  }

  deleteSkill(skill: Skill) {
    const index = this.recJobPost.skill.indexOf(skill, 0);
    this.recJobPost.skill.splice(index, 1);
  }
  addQuestions(question: Array<Question>) {
    this.recJobPost.questions.concat(question);
  }



  save() {
    const data: any = {};
    data.id = this.recJobPost.id;
    data.title = this.recJobPost.title;
    data.level = this.recJobPost.level;
    data.description = this.recJobPost.description;
    data.requirement = this.recJobPost.requirement;
    data.requiredQalification = this.recJobPost.requiredQalification;
    data.postDate = formatDate(new Date(), "yyyy-MM-dd", "en");
    data.closeDate = this.ngbDateParserFormatter.format(
      this.recJobPost.closeDate
    );
    data.estimatedSalary = this.recJobPost.estimatedSalary;
    data.address = this.recJobPost.address;
    data.employer = this.recJobPost.employer.getData();
    data.company = this.recJobPost.company.getData();
    this.recJobPost.skill.map(skill => data.skill.push(skill.getJson()));
    this.recJobPost.questions.map(question => data.questions.push(question));
    data.company.businessType = "InformationTechnology"; //TODO
    this.httpClient.postToServer("jobpost", data).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
