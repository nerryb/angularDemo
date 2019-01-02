import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent} from './events/event-thumbnail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    HomeComponent,
    LoginComponent
  ], 
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
