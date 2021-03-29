import { Component, Input, OnInit, SimpleChange, OnChanges ,OnDestroy, AfterContentInit} from '@angular/core';
import { Client } from 'src/app/client.model';

@Component({
  selector: 'app-child-cycle',
  templateUrl: './child-cycle.component.html',
  styleUrls: ['./child-cycle.component.css']
})

export class ChildCycleComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit{

  @Input() name : string;
  @Input() age : number;
  @Input() food : string;
  public events: lifeCycleEvent[] = [];
  nextEventId : number = 0;
  colors: string[]= ['accent', 'warn', 'primary'];

  constructor() {
    console.log(`constructor: ${this.name} - ${this.age} - ${this.food}`)
    this.newEvent("constructor");
  }
  
  ngOnInit(): void {
    console.log(`OnInit: ${this.name} - ${this.age} - ${this.food}`)
    this.newEvent("OnInit");
  }
  
  ngAfterContentInit(){
    console.log(`AfterContentInit: ${this.name} - ${this.age} - ${this.food}`)
    this.newEvent("AfterContentInit");
  }

  ngAfterViewInit(){
    console.log(`AfterViewInit: ${this.name} - ${this.age} - ${this.food}`)
    this.newEvent("AfterViewInit");
  }

  ngOnChanges(changes: {[propKey : string] : SimpleChange}){
    console.log(`OnChanges: ${this.name} - ${this.age} - ${this.food}`)
    this.newEvent("OnChanges");
    let logChanges = "Alterações: ";
    for(let prop in changes){
      logChanges += `${prop} - `
    }
    console.log(logChanges);
    
  }
  
  ngOnDestroy(){
    console.log(`OnDestroy: ${this.name} - ${this.age} - ${this.food}`)
    this.newEvent("OnDestroy");
  }

  newEvent(name: string){
    let i = this.nextEventId ++;
    this.events.push({
      id: i,
      color: this.colors[this.colors.length%i], 
      name: name
    })
    setTimeout(()=>{
      let idx = this.events.findIndex((e) => e.id === i);
      if ( idx >= 0)
        this.events.splice(idx, 1);
    },3000 + this.events.length*1000)
  }


}

export interface lifeCycleEvent{
  id: number;
  name: string;
  color: string;
}