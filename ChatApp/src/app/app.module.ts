import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { FormsModule } from '@angular/forms';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { QuestionComponent } from './users/quiz/question/question.component';
import { AnswerComponent } from './users/quiz/answer/answer.component';
import { FinalPageComponent } from './final-page/final-page.component';

import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { WelcomeComponent } from './welcome/welcome.component';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(environment.firebase);
const db = getFirestore(app);
// import * as firebase from 'firebase';

// firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    QuestionComponent,
    AnswerComponent,
    FinalPageComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    }),
    // AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  AngularFireAuthModule, // imports firebase/auth, only needed for auth features

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
