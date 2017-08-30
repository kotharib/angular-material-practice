import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MdCheckboxModule, MdRadioModule, MdSelectModule, MdInputModule, MdDatepickerModule, MdNativeDateModule, 
  MdIconModule, MdButtonModule, MdChipsModule, MdProgressSpinnerModule, MdTooltipModule, MdTabsModule, MdDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MdCheckboxModule,
    MdRadioModule,
    MdSelectModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdIconModule,
    MdButtonModule,
    MdChipsModule,
    MdProgressSpinnerModule,
    MdTooltipModule,
    MdTabsModule,
    MdDialogModule
  ],
  declarations: []
})
export class MdComponentsModule { }
