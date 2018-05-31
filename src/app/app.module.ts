import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';

import { DrugService } from './services/drug/drug.service';
import { DrugsComponent } from './components/drugs/drugs.component';
import { DrugDetailsComponent } from './components/drug-details/drug-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Drugs2Component } from './components/drugs2/drugs2.component';
import { DrugDetails2Component } from './components/drug-details2/drug-details2.component';

library.add(faSpinner);

@NgModule({
  declarations: [
    AppComponent,
    DrugsComponent,
    DrugDetailsComponent,
    Drugs2Component,
    DrugDetails2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    DrugService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
