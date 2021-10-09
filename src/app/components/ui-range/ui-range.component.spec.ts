import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRangeComponent } from './ui-range.component';

describe('UiRangeComponent', () => {
  let component: UiRangeComponent;
  let fixture: ComponentFixture<UiRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
