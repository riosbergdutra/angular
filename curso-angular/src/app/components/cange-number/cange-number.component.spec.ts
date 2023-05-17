import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CangeNumberComponent } from './cange-number.component';

describe('CangeNumberComponent', () => {
  let component: CangeNumberComponent;
  let fixture: ComponentFixture<CangeNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CangeNumberComponent]
    });
    fixture = TestBed.createComponent(CangeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
