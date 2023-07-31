import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameViewComponent } from './view/game-view/game-view.component';
import { GameTitleComponent } from './view/game-view/game-title/game-title.component';
import { initAppFactory } from './model/init-app-factory';
import { GameStateService } from './model/game-state.service';
import { WithGameStateComponent } from './view/with-game-state/with-game-state.component';
import { PlayViewComponent } from './view/game-view/play-view/play-view.component';

@NgModule({
  declarations: [AppComponent, GameViewComponent, GameTitleComponent, WithGameStateComponent, PlayViewComponent],
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
