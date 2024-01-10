import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe05Component } from './exe05.component';

describe('Exe05Component', () => {
  let component: Exe05Component;
  let fixture: ComponentFixture<Exe05Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exe05Component]
    });
    fixture = TestBed.createComponent(Exe05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
