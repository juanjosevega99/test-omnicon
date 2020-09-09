import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoShipComponent } from './info-ship.component';

describe('InfoShipComponent', () => {
  let component: InfoShipComponent;
  let fixture: ComponentFixture<InfoShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
