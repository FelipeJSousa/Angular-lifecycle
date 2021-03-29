import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  name:string = '';
  age:number = null;

  constructor() { }

  ngOnInit(): void {
    console.log('NgOnInit')
  }

  ngOnChanges(){
    console.log('ngOnChanges')

  }

  ngDoCheck(){
    console.log('ngDoCheck')

  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit')

  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')

  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit')

  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')

  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
    
  }

}
