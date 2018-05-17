import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';

import { DrugService } from './services/drug/drug.service';
import { DrugsComponent } from './components/drugs/drugs.component';
import { DrugDetailsComponent } from './components/drug-details/drug-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DrugsComponent,
    DrugDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    DrugService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
