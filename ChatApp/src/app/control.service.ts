import { Injectable } from '@angular/core';
import { ITEMS } from 'src/assets/mock-data';
import { Question } from 'src/assets/question';
// import {questions} from '../assets/question'

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  
  questions: Question[] = ITEMS
  constructor() { }
  i = 0
  correct = false
  count=0
  score=0
  changeQuestion(){
    this.i=this.i+1
  }
  reset(){
    this.i=0
    this.correct=false
    this.score=0
  }
}
