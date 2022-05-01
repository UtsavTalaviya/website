import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Fifa15Component } from './MyComponents/Data/fifa15/fifa15.component';
import { HomeComponent } from './MyComponents/Data/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

const routes: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'home/:id', component: TeamDetailsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent,
                                TeamDetailsComponent,
                                PageNotFoundComponent];
