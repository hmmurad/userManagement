import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
