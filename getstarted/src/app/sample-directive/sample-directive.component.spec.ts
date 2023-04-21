import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDirectiveComponent } from './sample-directive.component';

describe('SampleDirectiveComponent', () => {
  let component: SampleDirectiveComponent;
  let fixture: ComponentFixture<SampleDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
