import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Project1Component } from './components/projects/project1/project1.component';
import { Project2Component } from './components/projects/project2/project2.component';
import { Project3Component } from './components/projects/project3/project3.component';
import { Project4Component } from './components/projects/project4/project4.component';

const routes: Routes = [
  {path: 'project-1', component: Project1Component},
  {path: 'project-2', component: Project2Component},
  {path: 'project-3', component: Project3Component},
  {path: 'project-4', component: Project4Component},
  // {path: 'main', component: HomeComponent},
  // {path: '', redirectTo: 'main', pathMatch: 'full'},
  // {path: '**', component: HomeComponent}
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
  // {path: '', redirectTo: 'main', pathMatch: 'full'},
  // {path: '**', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
