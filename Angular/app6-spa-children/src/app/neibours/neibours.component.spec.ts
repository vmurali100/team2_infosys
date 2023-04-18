import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeiboursComponent } from './neibours.component';

describe('NeiboursComponent', () => {
  let component: NeiboursComponent;
  let fixture: ComponentFixture<NeiboursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeiboursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeiboursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
