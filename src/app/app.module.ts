import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatListModule } from '@angular/material/list'
import { MatChipsModule } from '@angular/material/chips'

import { AppComponent } from './app.component';
import { MainCycleComponent } from './main-cycle/main-cycle.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildCycleComponent } from './main-cycle/child-cycle/child-cycle.component';
import { GrandChildCycleComponent } from './main-cycle/child-cycle/grand-child-cycle/grand-child-cycle.component';
import { CheckComponent } from './check/check.component';
import { CheckChildComponent } from './check/check-child/check-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCycleComponent,
    ChildCycleComponent,
    GrandChildCycleComponent,
    CheckComponent,
    CheckChildComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatIconModule, 
    MatSelectModule,
    MatButtonModule, 
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    BrowserAnimationsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
