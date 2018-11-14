import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerupdatebookComponent } from './sellerupdatebook.component';

describe('SellerupdatebookComponent', () => {
  let component: SellerupdatebookComponent;
  let fixture: ComponentFixture<SellerupdatebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerupdatebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerupdatebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
