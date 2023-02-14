import { Component, OnInit } from '@angular/core';
import { CardsService } from './services/cards.service';
import { Card } from './Interfaces/card.interface';
import { CardSave } from './Interfaces/cardSave.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'buyCardsAtomicDesign';
  constructor(private cardService:CardsService){

   }
   ngOnInit(): void {


   }


}


