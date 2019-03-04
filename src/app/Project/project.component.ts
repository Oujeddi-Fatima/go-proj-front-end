import { Component, Injector } from "@angular/core";
import { Project } from './project.model';
import { ILogger } from '../Utility/logger.component';

@Component({
    //selector:"project",
    templateUrl:"./project.view.html",
    styleUrls: ['./project.component.scss']
})
export class  ProjectComponent{
    project: Project = new Project();
    projects: Array<Project> = new Array<Project>();
    logger: ILogger;
       constructor(_injector: Injector) {
        this.logger = _injector.get("2");
        this.logger.log();
        this.project.title = 'Updated Title';
      }
      addProject() {
        this.projects.push(this.project);
        this.project = new Project();
      }

      selectProject(_selectedproject: Project){
        this.project = _selectedproject;
      }
}