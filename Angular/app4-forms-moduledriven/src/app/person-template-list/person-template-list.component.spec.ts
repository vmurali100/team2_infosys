import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTemplateListComponent } from './person-template-list.component';

describe('PersonTemplateListComponent', () => {
  let component: PersonTemplateListComponent;
  let fixture: ComponentFixture<PersonTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonTemplateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
