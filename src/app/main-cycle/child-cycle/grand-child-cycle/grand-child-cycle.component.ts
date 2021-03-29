import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-child-cycle',
  templateUrl: './grand-child-cycle.component.html',
  styleUrls: ['./grand-child-cycle.component.css']
})
export class GrandChildCycleComponent implements OnInit {

  @Input() name : string;

  constructor() { }

  ngOnInit(): void {
    console.log('grand child (ngOnInit) - '+ this.name)

  }
  ngOnChanges(){
    console.log('grand child (ngOnChanges) - '+ this.name)
  }

  ngAfterContentInit(){
    console.log('grand child (ngAfterContentInit) - '+ this.name)
  }

}
