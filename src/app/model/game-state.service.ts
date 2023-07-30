import { Injectable } from '@angular/core';
import { GameStates } from './game-states';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  private gameState: GameStates;
  constructor() {
    this.gameState = GameStates.OFF;
  }
  public getState() {
    return new Observable((observer) => {
      observer.next(this.gameState);
    });
  }
  private setState(newState: GameStates): void {
    this.gameState = newState;
  }
  goToTitleState(): void {
    this.setState(GameStates.TITLE);
    console.log('goToTitleState');
  }
  goToPlayState(): void {
    this.setState(GameStates.PLAY);
    console.log('goToPlayState');
  }
}
