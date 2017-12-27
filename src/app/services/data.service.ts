import { Question } from './../models/Question';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
   /* this.questions = [
      {
        text: "what is your name?",
        answer: "My name is nani",
        hide: true
      },
      {
        text: "what is your favorite color?",
        answer: "My favorite color is skyblue",
        hide: true
      },
      {
        text: "what is your favorite place?",
        answer: "My favorite place is an island",
        hide: true
      }
    ];
    */

  }

//Get Questions from LS
  getQuestions() {
    if(localStorage.getItem('questions') === null){
      this.questions = [];      
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

//Add Question to LS
  addQuestion(question: Question) {
    this.questions.unshift(question);

    //Initi local var
    let questions;
    if(localStorage.getItem('questions') === null){
      questions = []; 
      //push new questions
      questions.unshift(question);
      //set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      //Add new Question
      questions.unshift(question);
      //Reset LS
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

//remove Question from LS
  removeQuestion(question: Question) {
    for(let i=0; i< this.questions.length ;i++){
      if(question == this.questions[i]){
        this.questions.splice(i,1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
