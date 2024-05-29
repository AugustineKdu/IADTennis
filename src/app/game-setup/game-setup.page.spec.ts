import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameSetupPage } from './game-setup.page';

describe('GameSetupPage', () => {
  let component: GameSetupPage;
  let fixture: ComponentFixture<GameSetupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
