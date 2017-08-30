import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-demo',
  templateUrl: './datepicker-demo.component.html',
  styleUrls: ['./datepicker-demo.component.css']
})
export class DatepickerDemoComponent {

  minDate = new Date(2017,1,1);
  maxDate = new Date(2017,8,1);

}
