import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomePage } from './app.component';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomePage]
})
export class EquityAnalysis { }
