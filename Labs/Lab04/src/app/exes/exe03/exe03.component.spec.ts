import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe03Component } from './exe03.component';

describe('Exe03Component', () => {
  let component: Exe03Component;
  let fixture: ComponentFixture<Exe03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exe03Component]
    });
    fixture = TestBed.createComponent(Exe03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
