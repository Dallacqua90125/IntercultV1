import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AgenciasComponent } from './pages/agencias/agencias.component';
import { SobreComponent } from './pages/sobre/sobre.component';
// import { ResultsComponent } from './pages/results/results.component';
// import { ContentComponent } from './pages/content/content.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: HomeComponent },
  { path: 'teste', component: HomeComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'agencias', component: AgenciasComponent},
  { path: 'sobre', component: SobreComponent},
  // { path: 'results', component: ResultsComponent},
  { path: 'documentation', component: DocumentationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'content/:id', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
