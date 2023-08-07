import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { WithBattleServiceComponent } from 'src/app/view/with-battle-service/with-battle-service.component';

@Component({
  selector: 'app-hero-tablist',
  templateUrl: './hero-tablist.component.html',
  styleUrls: ['./hero-tablist.component.scss'],
})
export class HeroTablistComponent
  extends WithBattleServiceComponent
  implements AfterViewInit, OnInit
{
  @ViewChild('container') container!: ElementRef;
  tabs: HTMLButtonElement[] = [];
  cursorIndex = 0;

  ngOnInit() {
    if (
      this.battleService.getHero(this.uiService.activeHeroPosition) === null
    ) {
      const indexOfFirstHero = this.battleService.heroes.findIndex(
        (hero) => hero !== null
      );
      this.uiService.setActiveHeroPosition(indexOfFirstHero);
    }
  }

  // Just make it so that the inactive tabs have a tabindex -1 and aria-selected false
  // meanwhile the active tab is reachable (no tabindex value override) and has aria-selected true
  ngAfterViewInit() {
    this.tabs = this.container.nativeElement.querySelectorAll('[role="tab"]');
    console.log(this.tabs);
  }

  handleTabClick(index: number) {
    this.uiService.setActiveHeroPosition(index);
    this.cursorIndex = index;
  }
}
