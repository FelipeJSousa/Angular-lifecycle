import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-main-cycle',
  templateUrl: './main-cycle.component.html',
  styleUrls: ['./main-cycle.component.css']
})
export class MainCycleComponent implements OnInit {

  clients : Client[] = [];
  
  name: string = "";
  age: number = null;
  food: string = "";
  foods: string[] = ['Rice', 'Beans', 'Pizza'];
  private _onEditClient : number = -1;

  constructor() { 
    console.log(this.foods);
  }

  ngOnInit(): void {
  }

  save(){
    if(this._onEditClient<0){
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      })
    }
    else{
      this.clients[this._onEditClient].name = this.name;
      this.clients[this._onEditClient].age = this.age;
      this.clients[this._onEditClient].food = this.food ;
      this._onEditClient = -1;
    }
    console.log(this.clients)
    this.name = '';
    this.age = null;
    this.food = '';
  }

  
  edit(idx: number){
    this.name = this.clients[idx].name;
    this.age = this.clients[idx].age;
    this.food = this.clients[idx].food;
    this._onEditClient = idx;
  }
  
  delete(idx: number){
    this.clients.splice(idx,1);
  }

  clear(){
    this.name = '';
    this.age = null;
    this.food = '';
    this._onEditClient = -1;
  }
}
