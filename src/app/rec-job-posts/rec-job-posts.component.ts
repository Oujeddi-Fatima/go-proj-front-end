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
import { RecJobPostsStructure } from "./rec-job-posts.structure";
import { AuthenticationService } from "../authentication.service";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-rec-job-posts",
  templateUrl: "./rec-job-posts.component.html"
})
export class RecJobPostsComponent implements OnInit {
  recJobPost: RecJobPost = new RecJobPost();
  recJobPosts: Array<RecJobPost> = new Array<RecJobPost>();
  savedRecJobPost: Array<RecJobPost> = new Array<RecJobPost>();
  private eventsSubject: Subject<any> = new Subject<any>();
  skillStructure: SkillStructure = new SkillStructure();
  recJobPostStructure: RecJobPostsStructure = new RecJobPostsStructure();
  emitEventToChild(event) {
    this.eventsSubject.next(event);
  }

  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClientService,
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) {
    this.getJobPostsforEmployer();
    this.recJobPost.employer.userId = this.authService.authModel.user.userId;
  }

  getJobPostsforEmployer() {
    this.httpClient
      .getFromServerHref(this.authService.authModel.user._links.jobPosts.href)
      .subscribe((jobPosts: Array<RecJobPost>) => {
        this.authService.authModel.user.jobPosts = JSON.parse(JSON.stringify(jobPosts));
        jobPosts.forEach(jobPost => {
          if (jobPost != null) {
            const formGroup: FormGroup = this.recJobPost.formGroup;
            jobPost.formGroup = formGroup;
          }
        });
        this.recJobPosts = jobPosts;
      });
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
    data.jobPostId = this.recJobPost.jobPostId;
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
    data.skill = [];
    data.questions = [];
    this.recJobPost.skill.map(skill => data.skill.push(skill));
    this.recJobPost.questions.map(question => data.questions.push(question));
    data.company.businessType = "InformationTechnology"; //TODO
    data.employer = {};
    data.employer.id = this.authService.authModel.user.userId;
    this.authService.authModel.user.jobPosts.push(data);
    this.recJobPost = new RecJobPost();
    this.httpClient
      .postToServer("employer", this.authService.authModel.user)
      .subscribe(
        data => {
          console.log(data);
          this.getJobPostsforEmployer();
        },
        err => {
          console.log(err);
          this.getJobPostsforEmployer();
        }
      );
  }
}
