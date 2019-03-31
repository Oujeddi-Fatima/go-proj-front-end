import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Project } from "./project.model";
import { Observable } from 'rxjs';
@Component({
  selector: "app-project",
  templateUrl: "./project.component.html"
})
export class ProjectComponent implements OnInit {
  project: Project = new Project();
  @Output() addProject: EventEmitter<any> = new EventEmitter();
  private eventsSubscription: any;
  @Input() projectAdded: Observable<any>;
  ngOnInit() {
    this.eventsSubscription = this.projectAdded.subscribe(project => {
      if(project == 'project')
      this.add();
    });
  }
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }
  constructor() {}


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
