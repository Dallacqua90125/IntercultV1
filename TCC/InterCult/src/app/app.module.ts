import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { SignUpFormsComponent } from './componentes/sign-up-forms/sign-up-forms.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    SignUpFormsComponent,
    NavBarComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
