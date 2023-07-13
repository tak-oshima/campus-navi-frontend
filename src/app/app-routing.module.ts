import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { ProfessorRatingsComponent } from './features/professor-ratings/professor-ratings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'professor-ratings/:id', component: ProfessorRatingsComponent },
  { path: 'error', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
