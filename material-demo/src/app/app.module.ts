import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CheckBoxDemoComponent } from './check-box-demo/check-box-demo.component';
import { RadioButtonDemoComponent } from './radio-button-demo/radio-button-demo.component';
import { DropDownListDemoComponent } from './drop-down-list-demo/drop-down-list-demo.component';
import { FormsModule } from "@angular/forms";
import { InputDemoComponent } from './input-demo/input-demo.component';
import { TextareaDemoComponent } from './textarea-demo/textarea-demo.component';
import { DatepickerDemoComponent } from './datepicker-demo/datepicker-demo.component';
import { IconDemoComponent } from './icon-demo/icon-demo.component';
import { ButtonDemoComponent } from './button-demo/button-demo.component';
import { ChipsDemoComponent } from "./chips-demo/chips-demo.component";
import { ProgressSpinnerDemoComponent } from './progress-spinner-demo/progress-spinner-demo.component';
import { ProgressSpinnerDemo2Component } from './progress-spinner-demo2/progress-spinner-demo2.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';
import { DialogDemoComponent } from "./dialog-demo/dialog-demo.component";
import { SamplePopupComponent } from "app/sample-popup/sample-popup.component";
import { MdComponentsModule } from "app/md-components.module";


@NgModule({
  declarations: [
    AppComponent,
    CheckBoxDemoComponent,
    RadioButtonDemoComponent,
    DropDownListDemoComponent,
    InputDemoComponent,
    TextareaDemoComponent,
    DatepickerDemoComponent,
    IconDemoComponent,
    ButtonDemoComponent,
    ChipsDemoComponent,
    ProgressSpinnerDemoComponent,
    ProgressSpinnerDemo2Component,
    TooltipDemoComponent,
    TabsDemoComponent,
    DialogDemoComponent,
    SamplePopupComponent
  ],
  entryComponents: [
    SamplePopupComponent
  ],  
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,   
    MdComponentsModule
  ],
  providers: [
    //{ provide: DIALOG_DATA, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
