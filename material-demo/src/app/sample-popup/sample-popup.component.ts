import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from "@angular/material";

export const DIALOG_DATA = new InjectionToken('DIALOG_DATA')

@Component({
  selector: 'app-sample-popup',
  templateUrl: './sample-popup.component.html',
  styleUrls: ['./sample-popup.component.css']
})

export class SamplePopupComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) data:any) { console.log("Data", data) }

  ngOnInit() {
  }

}
