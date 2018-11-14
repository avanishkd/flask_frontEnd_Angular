import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelleraddbookComponent } from './selleraddbook.component';

describe('SelleraddbookComponent', () => {
  let component: SelleraddbookComponent;
  let fixture: ComponentFixture<SelleraddbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelleraddbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelleraddbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
