import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-list-demo',
  templateUrl: './drop-down-list-demo.component.html',
  styleUrls: ['./drop-down-list-demo.component.css']
})
export class DropDownListDemoComponent{
   foods = [
     {id:1, name:"Pizza"},
     {id:2, name:"Burger"},
     {id:3, name:"Tacos"},
     {id:4, name:"Biryani"}
   ];

  food = 2;


}
