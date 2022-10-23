import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinRequestListComponent } from './pin-request-list.component';

describe('PinRequestListComponent', () => {
  let component: PinRequestListComponent;
  let fixture: ComponentFixture<PinRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
