import { Component, Injector } from "@angular/core";
import { Course } from './course.model';
import { ILogger } from '../Utility/logger.component';

@Component({
    //selector:"course",
    templateUrl:"./course.view.html",
    styleUrls: ['./course.component.scss']
})
export class CourseComponent {
    course: Course = new Course();
    courses: Array<Course> = new Array<Course>();
    logger: ILogger;
       constructor(_injector: Injector) {
        this.logger = _injector.get("2");
        this.logger.log();
        this.course.title = 'Updated Title';
      }
      addCourse() {
        this.courses.push(this.course);
        this.course = new Course();
      }

      selectCourse(_selectedcoourse: Course){
        this.course = _selectedcoourse;
      }
}