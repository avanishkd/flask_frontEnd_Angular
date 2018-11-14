import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerlandComponent } from './sellerland.component';

describe('SellerlandComponent', () => {
  let component: SellerlandComponent;
  let fixture: ComponentFixture<SellerlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
