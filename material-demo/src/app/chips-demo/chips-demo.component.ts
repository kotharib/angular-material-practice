import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips-demo',
  templateUrl: './chips-demo.component.html',
  styleUrls: ['./chips-demo.component.css']
})
export class ChipsDemoComponent  {

  categories = [
    {name : 'Papadam'},
    {name : 'Dal'},
    {name : 'Naan' },
    {name : 'Kulcha'}
  ];

  selectCategory(category){
    this.categories.filter(c=>c != category).forEach(c=>c['selected']= false);
    category.selected = !category.selected;
  }
}
