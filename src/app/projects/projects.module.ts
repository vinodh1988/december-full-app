import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './home/details/details.component';
import { BaseComponent } from './home/base/base.component';
const routes: Routes  = [
  {
    path:"",
    component:HomeComponent,
    children:[
      {path:"",component:BaseComponent},
      {path:"details",component:DetailsComponent}
    ]},
  
];



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
