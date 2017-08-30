import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box-demo',
  templateUrl: './check-box-demo.component.html',
  styleUrls: ['./check-box-demo.component.css']
})
export class CheckBoxDemoComponent implements OnInit {
  isChecked = true;

  constructor() { }

  ngOnInit() {
  }

  onChange($event){
    console.log($event);
  }

}
