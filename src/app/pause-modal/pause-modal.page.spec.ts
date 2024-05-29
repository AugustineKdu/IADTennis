import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PauseModalPage } from './pause-modal.page';

describe('PauseModalPage', () => {
  let component: PauseModalPage;
  let fixture: ComponentFixture<PauseModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PauseModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
