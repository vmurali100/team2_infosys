import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso1Component } from './iso1.component';

describe('Iso1Component', () => {
  let component: Iso1Component;
  let fixture: ComponentFixture<Iso1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
