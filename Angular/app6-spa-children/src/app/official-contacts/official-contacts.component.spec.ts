import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialContactsComponent } from './official-contacts.component';

describe('OfficialContactsComponent', () => {
  let component: OfficialContactsComponent;
  let fixture: ComponentFixture<OfficialContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficialContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
