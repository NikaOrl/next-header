import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextHeaderComponent } from './next-header.component';

describe('NextHeaderComponent', () => {
  let component: NextHeaderComponent;
  let fixture: ComponentFixture<NextHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
