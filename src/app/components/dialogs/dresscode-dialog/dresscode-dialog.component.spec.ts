import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DresscodeDialogComponent } from './dresscode-dialog.component';

describe('DresscodeDialogComponent', () => {
  let component: DresscodeDialogComponent;
  let fixture: ComponentFixture<DresscodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DresscodeDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DresscodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
