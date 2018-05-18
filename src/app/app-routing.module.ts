import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DrugsComponent } from './components/drugs/drugs.component';
import { DrugDetailsComponent } from './components/drug-details/drug-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/drugs', pathMatch: 'full' },
  { path: 'drugs', component: DrugsComponent },
  { path: 'drugs/:name', component: DrugDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }


