import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutusComponent } from './body/aboutus/aboutus.component';
import { TeamComponent } from './body/team/team.component';
import { PricingComponent } from './body/pricing/pricing.component';
import { BlogComponent } from './body/blog/blog.component';
import { ContactComponent } from './body/contact/contact.component';


const routes: Routes = [
  { path: 'aboutUs', component: AboutusComponent },
  { path: 'our team', component: TeamComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
