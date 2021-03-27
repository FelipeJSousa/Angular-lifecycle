import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-cycle',
  templateUrl: './child-cycle.component.html',
  styleUrls: ['./child-cycle.component.css']
})
export class ChildCycleComponent implements OnInit {
  
  @Input() name : string;
  @Input() age : number;
  @Input() food : string;
  
  constructor() {
    console.log(`${this.name} - ${this.age} - ${this.food}`)
   }

  ngOnInit(): void {
  }


}
