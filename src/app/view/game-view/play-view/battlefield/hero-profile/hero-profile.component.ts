import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EventService } from 'src/app/model/event-service/event.service';
import { Hero } from 'src/app/model/gameplay-model/heroes/hero';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss'],
})
export class HeroProfileComponent implements OnInit, OnDestroy {
  @Input({ required: true })
  hero!: Hero;
  isOpen: boolean = false;
  listenerId: string = '';
  static CLOSE_HERO_ACCORDIONS: string = 'close-hero-accordions';

  eventService: EventService;

  constructor(eventService: EventService) {
    this.eventService = eventService;
  }

  closeAccordion() {
    this.isOpen = false;
  }

  ngOnInit() {
    this.listenerId = this.hero.id;
    this.eventService.subscribe(
      HeroProfileComponent.CLOSE_HERO_ACCORDIONS,
      this.hero.id,
      () => this.closeAccordion()
    );
  }

  ngOnDestroy() {
    this.eventService.unsubscribe(
      HeroProfileComponent.CLOSE_HERO_ACCORDIONS,
      this.listenerId
    );
  }

  toggleAccordion() {
    if (!this.isOpen) {
      this.eventService.trigger(HeroProfileComponent.CLOSE_HERO_ACCORDIONS);
    }
    this.isOpen = !this.isOpen;
  }

  getAccordionId() {
    return this.hero.id + '-hero-id';
  }

  getAccordionClass() {
    return (
      'hero-info' + (this.isOpen ? ' hero-info--opened' : ' hero-info--closed')
    );
  }
}
