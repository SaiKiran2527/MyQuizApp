import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public authService: AuthService, private cont: ControlService) { }
  username=this.authService.username
  ngOnInit(): void {
  }

  logout(){
    this.authService.Logout()
    this.cont.reset()
  }
}
