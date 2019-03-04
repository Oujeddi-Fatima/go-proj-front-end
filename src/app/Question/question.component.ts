import { Component, Injector } from "@angular/core";
import { Question } from './question.model';
import { ILogger } from '../Utility/logger.component';

@Component({
    //selector:"question",
    templateUrl:"./question.view.html",
    styleUrls: ['./question.component.scss']
})
export class  QuestionComponent{
    question: Question = new Question();
    questions: Array<Question> = new Array<Question>();
    logger: ILogger;
       constructor(_injector: Injector) {
        this.logger = _injector.get("2");
        this.logger.log();
        this.question.answer = 'Updated answer';
      }
      addQuestion() {
        this.questions.push(this.question);
        this.question = new Question();
      }

      selectQuestion(_selectedquestion: Question){
        this.question = _selectedquestion;
      }
}