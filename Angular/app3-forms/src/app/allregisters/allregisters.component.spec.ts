import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllregistersComponent } from './allregisters.component';

describe('AllregistersComponent', () => {
  let component: AllregistersComponent;
  let fixture: ComponentFixture<AllregistersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllregistersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllregistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
