import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardMembersComponent } from './pages/board-members/board-members.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CurrentDirectorComponent } from './pages/current-director/current-director.component';
import { EventsComponent } from './pages/events/events.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { InMemoryComponent } from './pages/in-memory/in-memory.component';
import { PastConductorsComponent } from './pages/past-conductors/past-conductors.component';

const routes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'board-members', component: BoardMembersComponent },
  { path: 'current-director', component: CurrentDirectorComponent },
  { path: 'past-directors', component: PastConductorsComponent },
  { path: 'in-memory', component: InMemoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'events', component: EventsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
