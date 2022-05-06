import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Fifa15Component } from './MyComponents/Data/fifa15/fifa15.component';
import { HomeComponent } from './MyComponents/Data/home/home.component';
import { SettingsComponent } from './MyComponents/Data/Settings/settings/settings.component';
import { MatchDetailsComponent } from './MyComponents/match-details/match-details.component';
import { MatchComponent } from './MyComponents/match/match.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

const routes: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'Match', component: MatchComponent},
  { path: 'setting', component: SettingsComponent},
  { path: 'home/:team_long_name', component: TeamDetailsComponent},
  { path: 'Match/:name', component: MatchDetailsComponent},
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent,
                                TeamDetailsComponent,
                                PageNotFoundComponent,
                                MatchComponent];
