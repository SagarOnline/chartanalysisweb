import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomePage } from './app.component';
import { EquityAnalysisModule } from './equity-analysis/equity-analysis.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    BrowserModule, EquityAnalysisModule
  ],
  providers: [],
  bootstrap: [HomePage]
})
export class AppModule { }
