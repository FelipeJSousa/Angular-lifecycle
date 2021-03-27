import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCycleComponent } from './main-cycle.component';

describe('MainCycleComponent', () => {
  let component: MainCycleComponent;
  let fixture: ComponentFixture<MainCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
