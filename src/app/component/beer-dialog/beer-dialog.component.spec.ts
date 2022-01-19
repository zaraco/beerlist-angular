import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDialogComponent } from './beer-dialog.component';

describe('BeerDialogComponent', () => {
  let component: BeerDialogComponent;
  let fixture: ComponentFixture<BeerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeerDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
