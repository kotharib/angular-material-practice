import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";
import { SamplePopupComponent } from "../sample-popup/sample-popup.component";

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent  {

  constructor(private dialog:MdDialog) {
    
  }

  openDialog(){
    this.dialog.open(SamplePopupComponent, {
        data: { orderid: 1 }  
    }).afterClosed().subscribe(x => console.log(x));
  }

}
