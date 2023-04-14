import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso2Component } from './iso2.component';

describe('Iso2Component', () => {
  let component: Iso2Component;
  let fixture: ComponentFixture<Iso2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
