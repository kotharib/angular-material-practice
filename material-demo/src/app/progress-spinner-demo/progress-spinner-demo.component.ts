import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner-demo',
  templateUrl: './progress-spinner-demo.component.html',
  styleUrls: ['./progress-spinner-demo.component.css']
})
export class ProgressSpinnerDemoComponent {
   progress = 0;
   timer;
    
  constructor() {
    this.timer = setInterval(()=>{
        this.progress++;
        if(this.progress == 100) clearInterval(this.timer);
    }, 20);   
  }
 
}
