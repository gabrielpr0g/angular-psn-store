import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-card-label',
  imports: [],
  templateUrl: './card-label.html',
  styleUrl: './card-label.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardLabel {
  @Input()
  gameLabel: string = "";
}
