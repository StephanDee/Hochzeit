import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareDialogComponent } from './prepare-dialog.component';

describe('PrepareDialogComponent', () => {
  let component: PrepareDialogComponent;
  let fixture: ComponentFixture<PrepareDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrepareDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepareDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
