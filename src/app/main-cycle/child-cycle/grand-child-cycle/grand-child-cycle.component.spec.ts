import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildCycleComponent } from './grand-child-cycle.component';

describe('GrandChildCycleComponent', () => {
  let component: GrandChildCycleComponent;
  let fixture: ComponentFixture<GrandChildCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandChildCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
