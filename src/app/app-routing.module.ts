import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersHomeComponent } from './Users/users-home/users-home.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users-home', component: UsersHomeComponent},
  {path: 'admin', component: AdminHomeComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
