import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
username="unknown"
loginSuccess=false
  constructor() { }
Signup(email:string,password:string){
  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log(email + " successfully registered")
    const user = userCredential.user;
    this.username=email
    alert("Successfully resgistered "+email)
    
    // ...
  })
  .catch((error) => {
    console.log("nahh")
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    alert(error.message+ "This email cannot be used to register")
    // ..
  });
}

Login(email:string,password:string){
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    this.username=email
    this.loginSuccess=true
    // alert("Login Successful")
    
  })
  .catch((error) => {
    alert("Login Failed")
    const errorCode = error.code;
    const errorMessage = error.message;
    this.loginSuccess=false
  });
}

Logout(){
  const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  alert("Logout Successful")
  this.username="unknown"
}).catch((error) => {
  // An error happened.
  alert("Logout Failed")
});

}
}
