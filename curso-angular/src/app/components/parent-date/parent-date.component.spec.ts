import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDateComponent } from './parent-date.component';

describe('ParentDateComponent', () => {
  let component: ParentDateComponent;
  let fixture: ComponentFixture<ParentDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentDateComponent]
    });
    fixture = TestBed.createComponent(ParentDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
