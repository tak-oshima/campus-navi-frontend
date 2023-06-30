import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-daisy-overlay-hero',
  templateUrl: './daisy-overlay-hero.component.html',
  styleUrls: ['./daisy-overlay-hero.component.css']
})
export class DaisyOverlayHeroComponent {
  @Input() backgroundUrl: string = "";
  constructor() { }
}
