import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email=""
  password=""
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    if (this.email && this.password) {
      console.log(this.email +" "+ this.password);
      this.authService.Signup(
        this.email,
        this.password
      );
    }
  }

  logout(){
    this.authService.Logout()
  }

  userInfo(){
    alert("Logged in as "+this.authService.username)
  }
}
