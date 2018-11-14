import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Showbook1Component } from './showbook1.component';

describe('Showbook1Component', () => {
  let component: Showbook1Component;
  let fixture: ComponentFixture<Showbook1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Showbook1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Showbook1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
