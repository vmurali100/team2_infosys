import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTemplateComponent } from './person-template.component';

describe('PersonTemplateComponent', () => {
  let component: PersonTemplateComponent;
  let fixture: ComponentFixture<PersonTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
