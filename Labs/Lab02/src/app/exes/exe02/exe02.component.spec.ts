import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe02Component } from './exe02.component';

describe('Exe02Component', () => {
  let component: Exe02Component;
  let fixture: ComponentFixture<Exe02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exe02Component]
    });
    fixture = TestBed.createComponent(Exe02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
