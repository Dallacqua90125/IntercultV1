import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './componentes/search-bar/search-bar.component';
import { ProgramsComponent } from './componentes/programs/programs.component';
import { DropBoxComponent } from './componentes/drop-box/drop-box.component';
import { LoginDropdownComponent } from './componentes/login-dropdown/login-dropdown.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AgenciasComponent } from './pages/agencias/agencias.component';
import { SobreComponent } from './pages/sobre/sobre.component';
// import { ResultsComponent } from './pages/results/results.component';
// import { ContentComponent } from './pages/content/content.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { CarroselComponent } from './pages/carrosel/carrosel.component';
import { FooterComponent } from './componentes/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavBarComponent,
    HomeComponent,
    ProgramsComponent,
    SearchBarComponent,
    DropBoxComponent,
    LoginDropdownComponent,
    ProfileComponent,
    AgenciasComponent,
    SobreComponent,
    // ResultsComponent,
    // ContentComponent,
    DocumentationComponent,
    CarroselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
