import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquityListComponent } from './equity-list/equity-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EquityListComponent],
  exports : [EquityListComponent]

})
export class EquityAnalysisModule { }
