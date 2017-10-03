import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerryCountdownComponent } from './ferry-countdown.component';

describe('FerryCountdownComponent', () => {
  let component: FerryCountdownComponent;
  let fixture: ComponentFixture<FerryCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerryCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerryCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
