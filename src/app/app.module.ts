import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [
    AppComponent,
  routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
