import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerlandComponent } from './buyerland.component';

describe('BuyerlandComponent', () => {
  let component: BuyerlandComponent;
  let fixture: ComponentFixture<BuyerlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
