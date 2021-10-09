import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSignComponent } from './ui-sign.component';

describe('UiSignComponent', () => {
  let component: UiSignComponent;
  let fixture: ComponentFixture<UiSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
