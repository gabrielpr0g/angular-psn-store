import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.html',
  styleUrl: './card-pricing.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardPricing {
  @Input()
  gameType:string ="Digital PS4"
  @Input()
  gamePrice:string = "R$ 399,90"
}
