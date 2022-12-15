import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HistoryComponent } from './pages/history/history.component';
import { BoardMembersComponent } from './pages/board-members/board-members.component';
import { CurrentDirectorComponent } from './pages/current-director/current-director.component';
import { PastConductorsComponent } from './pages/past-conductors/past-conductors.component';
import { InMemoryComponent } from './pages/in-memory/in-memory.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventsComponent } from './pages/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HistoryComponent,
    BoardMembersComponent,
    CurrentDirectorComponent,
    PastConductorsComponent,
    InMemoryComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ToolbarComponent,
    FooterComponent
  ]
})
export class AppModule { }
