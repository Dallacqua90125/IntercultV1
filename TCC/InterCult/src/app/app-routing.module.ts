import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FranceComponent } from './pages/france/france.component';
import { EuaComponent } from './pages/eua/eua.component';
import { ItalyComponent } from './pages/italy/italy.component';
import { AgenciasComponent } from './pages/agencias/agencias.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ResultsComponent } from './pages/results/results.component';
import { ContentComponent } from './pages/content/content.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'franca', component: FranceComponent },
  { path: 'america', component: EuaComponent},
  { path: 'italia', component: ItalyComponent},
  { path: 'agencias', component: AgenciasComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'results', component: ResultsComponent},
  { path: 'documentation', component: DocumentationComponent},
  { path: 'content/:id', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
