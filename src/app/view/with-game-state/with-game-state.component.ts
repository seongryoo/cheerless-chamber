import { Component, OnInit } from '@angular/core';
import { GameStateService } from 'src/app/model/game-state.service';
import { GameStates } from 'src/app/model/game-states';

@Component({
  selector: 'app-with-game-state',
  templateUrl: './with-game-state.component.html',
  styleUrls: ['./with-game-state.component.scss'],
})
export class WithGameStateComponent implements OnInit {
  gameStateService: GameStateService;
  readonly GameStates = GameStates;
  gameState: GameStates;
  constructor(gameStateService: GameStateService) {
    this.gameStateService = gameStateService;
    this.gameState = GameStates.OFF;
  }
  ngOnInit() {
    this.gameStateService.gameState.subscribe((state: any) => {
      this.gameState = state;
    });
  }
}
