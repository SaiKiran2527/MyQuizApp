import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.scss']
})
export class FinalPageComponent implements OnInit {

  constructor(private cont: ControlService, private authService: AuthService) { }
  score=this.cont.score
  ngOnInit(): void {
  }
  retakeQuiz(){
    this.cont.i=0
    this.cont.correct=false
    this.cont.score=0
    this.score=0
  }

  logout(){
    this.authService.Logout()
    this.cont.reset();
  }

}
