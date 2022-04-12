import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email=""
  password=""
  constructor(public authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.email && this.password) {
      console.log(this.email +" "+ this.password);
      this.authService.Login(
        this.email,
        this.password
      );
      
    }
    console.log(this.authService.loginSuccess)
    if(this.authService.loginSuccess){
      console.log(this.authService.loginSuccess)
      this.router.navigate(["/welcome"]);
      alert("Login Successful")
    }
    // setTimeout(this.func,3000)
    
  }

  func(){
    
    console.log(this.authService.loginSuccess)
    if(this.authService.loginSuccess){
      console.log(this.authService.loginSuccess)
      this.router.navigate(["/welcome"]);
    }
  }

  logout(){
    this.authService.Logout()
  }

  userInfo(){
    alert("Logged in as "+this.authService.username)
  }

}
