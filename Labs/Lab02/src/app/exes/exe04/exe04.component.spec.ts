import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe04Component } from './exe04.component';

describe('Exe04Component', () => {
  let component: Exe04Component;
  let fixture: ComponentFixture<Exe04Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exe04Component]
    });
    fixture = TestBed.createComponent(Exe04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
