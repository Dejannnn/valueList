import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
//Servies
import {ValuteServce} from '../services/valute.servce';
//Components
import {ListAllvalues} from '../components/listValutes/listAllvalues.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,ListAllvalues
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,ReactiveFormsModule
  ],
  providers: [ValuteServce],
  bootstrap: [AppComponent]
})
export class AppModule { }
