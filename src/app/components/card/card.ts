
import { Component, Input,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CardLabel} from "./card-label/card-label";
import { CardPricing} from "./card-pricing/card-pricing";


@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
  imports: [CardLabel, CardPricing],  // plural e array
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Card {
  @Input()
  gameCover:string=""
    @Input()
  gameLabel: string =""
   @Input()
  gameType:string ="XPO | PS4"
  @Input()
  gamePrice:string = "R$ 399,90"
  
}
