/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrimengGalleriaComponent } from './primeng-galleria.component';

describe('PrimengGalleriaComponent', () => {
  let component: PrimengGalleriaComponent;
  let fixture: ComponentFixture<PrimengGalleriaComponent>;

  beforeEach((async () => {
    TestBed.configureTestingModule({
      declarations: [PrimengGalleriaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengGalleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
