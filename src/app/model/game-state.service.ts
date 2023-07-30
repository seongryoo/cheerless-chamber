import { Injectable } from '@angular/core';
import { GameStates } from './game-states';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  private _gameState = new BehaviorSubject<GameStates>(GameStates.OFF);
  readonly gameState = this._gameState.asObservable();
  constructor() {
    this.goToTitleState();
  }
  private setState(newState: GameStates): void {
    this._gameState.next(newState);
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
