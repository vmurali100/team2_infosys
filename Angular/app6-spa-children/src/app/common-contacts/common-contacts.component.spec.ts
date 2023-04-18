import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonContactsComponent } from './common-contacts.component';

describe('CommonContactsComponent', () => {
  let component: CommonContactsComponent;
  let fixture: ComponentFixture<CommonContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
