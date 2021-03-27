import { Component, Input, OnInit, SimpleChange, OnChanges ,OnDestroy, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-child-cycle',
  templateUrl: './child-cycle.component.html',
  styleUrls: ['./child-cycle.component.css']
})
export class ChildCycleComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit{
  
  @Input() name : string;
  @Input() age : number;
  @Input() food : string;
  
  constructor() {
    console.log(`constructor: ${this.name} - ${this.age} - ${this.food}`)
  }
  
  ngOnInit(): void {
    console.log(`OnInit: ${this.name} - ${this.age} - ${this.food}`)
  }
  
  ngAfterContentInit(){
    console.log(`AfterContentInit: ${this.name} - ${this.age} - ${this.food}`)
  }

  ngAfterViewInit(){
    console.log(`AfterViewInit: ${this.name} - ${this.age} - ${this.food}`)
  }

  ngOnChanges(changes: {[propKey : string] : SimpleChange}){
    console.log(`OnChanges: ${this.name} - ${this.age} - ${this.food}`)
  }
  
  
  ngOnDestroy(){
    console.log(`OnDestroy: ${this.name} - ${this.age} - ${this.food}`)

  }


}
