import { Component, Injector } from "@angular/core";
import { JobPost } from './jobPost.model';
import { ILogger } from '../Utility/logger.component';

@Component({
   // selector:"job-post",
    templateUrl:"./jobPost.view.html",
    styleUrls: ['./jobPost.component.scss']
})
export class  JobPostComponent{
    jobPost: JobPost = new JobPost();
    jobPosts: Array<JobPost> = new Array<JobPost>();
    logger: ILogger;
       constructor(_injector: Injector) {
        this.logger = _injector.get("2");
        this.logger.log();
        this.jobPost.title = 'Updated Title';
      }
      addjobPost() {
        this.jobPosts.push(this.jobPost);
        this.jobPost = new JobPost();
      }

      selectjobPost(_selectedjobPost: JobPost){
        this.jobPost = _selectedjobPost;
      }
}