import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PredictorComponent } from './predictor/predictor.component';

@NgModule({
  declarations: [
    AppComponent,
    PredictorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
