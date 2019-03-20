import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Project } from "./project.model";
@Component({
  selector: "app-project",
  templateUrl: "./project.component.html"
})
export class ProjectComponent implements OnInit {
  project: Project = new Project();
  @Output() addProject: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  add(){
    const data: any = {};
    data.id = this.project.id;
    data.description = this.project.description;
    data.duration = this.project.duration;
    data.link = this.project.link;
    data.title = this.project.title;
    this.addProject.emit(data);
    this.project = new Project();
  }
}
