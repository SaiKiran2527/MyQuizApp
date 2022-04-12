import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/control.service';
import { ITEMS } from 'src/assets/mock-data';
import { Question } from '../../../../assets/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  option:string=""
  selectedOption: any;
  constructor(private cont: ControlService) {
    
   }
   
  questions: Question[] = ITEMS
   j=this.cont.i
   
  ngOnInit(): void {
  }

  clickNextButton(){
    // if(this.questions[this.j][0]){}
    console.log("in "+this.cont.questions.length + " "+ this.j)
    if(this.selectedOption==this.questions[this.j].answer){
      console.log("yo supp man")
      this.cont.correct=true
    }
  }
  optionChange(event : any){
    this.selectedOption=event.target.value;
    console.log(this.selectedOption)
  }

}
