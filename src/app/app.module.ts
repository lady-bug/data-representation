import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartLanguagesComponent } from './chart-languages/chart-languages.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    ChartLanguagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
