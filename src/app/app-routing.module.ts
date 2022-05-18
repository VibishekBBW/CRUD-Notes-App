import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', component: MainLayoutComponent, children: [
    { path: '', component: NotesListComponent},
    {path: 'new', component: NoteDetailsComponent},
    //Reihenfolge ist wichtig, da Angular immer von oben nach unten geht, da sonst bei umgekehrter Reihenfolge, alle Routes als dynamischer Route/String angesehen werden
    {path: ':id', component: NoteDetailsComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
