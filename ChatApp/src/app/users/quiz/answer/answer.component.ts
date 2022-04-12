import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/control.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  msg:string=""
  j=this.cont.i
  count=this.cont.questions.length
  constructor(private cont: ControlService) { 
  }

  ngOnInit(): void {
    if(this.cont.correct){
      this.msg=this.cont.questions[this.j].correct
      this.cont.score=this.cont.score+1
    }else{
      this.msg=this.cont.questions[this.j].wrong
    }
  }
  

  nextQuestion(){
    this.cont.correct=false
    this.cont.changeQuestion()
  }

}
