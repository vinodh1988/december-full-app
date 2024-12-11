import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { DetailsComponent } from './pages/home/details/details.component';
import { loadifGuard } from './gaurds/loadif.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component: AboutComponent},
  {path:"services",component: ServicesComponent},
  {path:"contact",component: ContactComponent} ,
  {path:"home/:id",component: DetailsComponent},
  {path:"projects", canActivate: [loadifGuard],
    loadChildren:() => import('./projects/projects.module').then(m => m.ProjectsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
