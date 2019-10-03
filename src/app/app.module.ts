import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MegaMenuModule } from 'primeng/megamenu';
import { GMapModule } from 'primeng/gmap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CanadaCalculatorComponent } from './canada-calculator/canada-calculator.component';
import { AustraliaCalculatorComponent } from './australia-calculator/australia-calculator.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { CalendarModule } from 'primeng/calendar';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { PrVisaComponent } from './pr-visa/pr-visa.component';
import { StudentVisaComponent } from './student-visa/student-visa.component';
import { CheckEligibilityComponent } from './check-eligibility/check-eligibility.component';
import { AustraliaEligibilityCheckComponent } from './australia-eligibility-check/australia-eligibility-check.component';
import { CanadaEligibilityCheckComponent } from './canada-eligibility-check/canada-eligibility-check.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CanadaCalculatorComponent,
    AustraliaCalculatorComponent,
    CalculatorsComponent,
    ClientDetailsComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    PrVisaComponent,
    StudentVisaComponent,
    CheckEligibilityComponent,
    AustraliaEligibilityCheckComponent,
    CanadaEligibilityCheckComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabViewModule,
    AngularFontAwesomeModule,
    StepsModule,
    InputTextModule,
    PasswordModule,
    CalendarModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    MegaMenuModule,
    GMapModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
