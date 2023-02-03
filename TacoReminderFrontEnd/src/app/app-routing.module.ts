import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { NameSelectComponent } from './name-select/name-select.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  {path:'add', component:AddUserComponent},
  {path:'send', component:NameSelectComponent},
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
