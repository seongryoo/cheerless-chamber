import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameViewComponent } from './view/game-view/game-view.component';
import { GameTitleComponent } from './view/game-view/game-title/game-title.component';
import { initAppFactory } from './model/init-app-factory';
import { GameStateService } from './model/game-state-service/game-state.service';
import { WithGameStateComponent } from './view/with-game-state/with-game-state.component';
import { PlayViewComponent } from './view/game-view/play-view/play-view.component';
import { BattlefieldComponent } from './view/game-view/play-view/battlefield/battlefield.component';
import { HeroProfileComponent } from './view/game-view/play-view/battlefield/hero-profile/hero-profile.component';
import { WithBattleServiceComponent } from './view/with-battle-service/with-battle-service.component';
import { HeroTablistComponent } from './view/game-view/play-view/battlefield/hero-tablist/hero-tablist.component';

@NgModule({
  declarations: [AppComponent, GameViewComponent, GameTitleComponent, WithGameStateComponent, PlayViewComponent, BattlefieldComponent, HeroProfileComponent, WithBattleServiceComponent, HeroTablistComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAppFactory,
      multi: true,
      deps: [GameStateService]
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
