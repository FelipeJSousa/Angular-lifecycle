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
  age: number = 0;
  food: string = "";
  foods: string[] = ['Rice', 'Beans', 'Pizza'];
  private _onEditClient : Client = null;

  constructor() { 
    console.log(this.foods);
  }

  ngOnInit(): void {
  }

  save(){
    if(this._onEditClient==null){
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      })
    }
    console.log(this.clients)
    this.name = '';
    this.age = null;
    this.food = '';
  }
  
}
