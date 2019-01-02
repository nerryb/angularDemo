import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventListComponent} from './events/events-list.component'
import { HomeComponent } from './home/home.component'
import { RouteGuardService } from './service/route-guard.service'


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventListComponent, canActivate: [RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
