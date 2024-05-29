import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameResultsPage } from './game-results.page';

describe('GameResultsPage', () => {
  let component: GameResultsPage;
  let fixture: ComponentFixture<GameResultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GameResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
