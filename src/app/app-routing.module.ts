import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AustraliaCalculatorComponent } from './australia-calculator/australia-calculator.component';
import { CanadaCalculatorComponent } from './canada-calculator/canada-calculator.component';
import { PrVisaComponent } from './pr-visa/pr-visa.component';
import { StudentVisaComponent } from './student-visa/student-visa.component';
import { CheckEligibilityComponent } from './check-eligibility/check-eligibility.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'aboutus', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'australia-calculator', component: AustraliaCalculatorComponent},
  { path: 'canada-calculator', component: CanadaCalculatorComponent},
  { path: 'pr-visa', component: PrVisaComponent},
  { path: 'student-visa', component: StudentVisaComponent},
  { path: 'check-eligibility', component: CheckEligibilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
