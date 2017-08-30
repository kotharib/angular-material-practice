import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/timer'

@Component({
  selector: 'app-progress-spinner-demo2',
  templateUrl: './progress-spinner-demo2.component.html',
  styleUrls: ['./progress-spinner-demo2.component.css']
})
export class ProgressSpinnerDemo2Component {
  isLoading = false;

  constructor() { 
    this.isLoading = true;
    this.getFoodNames()
    .subscribe(x=> this.isLoading = false);
  }

  getFoodNames(){
    return Observable.timer(2000);
  }
  

}
