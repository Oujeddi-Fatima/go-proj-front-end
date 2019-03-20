import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Question } from "./question.model";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html"
})
export class QuestionComponent implements OnInit {
  @Output() addQuestions: EventEmitter<any> = new EventEmitter();
  questions: Array<Question> = new Array<Question>();
  question: Question = new Question();
  constructor() {}

  ngOnInit() {}

  addQuestion() {
    this.questions.push(this.question);
    this.question = new Question();
    this.emit();
  }

  emit(){
    this.addQuestions.emit(this.questions)
  }
}
