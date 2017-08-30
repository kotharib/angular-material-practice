import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button-demo',
  templateUrl: './radio-button-demo.component.html',
  styleUrls: ['./radio-button-demo.component.css']
})
export class RadioButtonDemoComponent implements OnInit {
  isChecked = true;
  constructor() { }

  ngOnInit() {
  }

}
