import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/model/gameplay-model/heroes/hero';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss'],
})
export class HeroProfileComponent {
  @Input({ required: true })
  hero!: Hero;
  isOpen: boolean = false;

  constructor() {}

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  getAccordionId() {
    return this.hero.id + "-hero-id"
  }

  getAccordionClass() {
    return "hero-info" + (this.isOpen
      ? " hero-info--opened"
      : " hero-info--closed");
  }
}
