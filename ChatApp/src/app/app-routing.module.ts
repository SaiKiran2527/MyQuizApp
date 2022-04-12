import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalPageComponent } from './final-page/final-page.component';
import { LoginComponent } from './users/login/login.component';
import { AnswerComponent } from './users/quiz/answer/answer.component';
import { QuestionComponent } from './users/quiz/question/question.component';
import { RegisterComponent } from './users/register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'answer', component: AnswerComponent},
  {path:'quiz', component: QuestionComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'end', component: FinalPageComponent},
  {path:'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
