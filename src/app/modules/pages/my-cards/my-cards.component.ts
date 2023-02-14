import { Component, OnInit } from '@angular/core';
import { CardSave } from 'src/app/Interfaces/cardSave.interface';
import { User } from 'src/app/Interfaces/user.interface';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.scss']
})
export class MyCardsComponent implements OnInit {
  cards:CardSave[];
  user:User;
  constructor(private serviceCards:CardsService) {
    this.cards=[];
    this.user = serviceCards.getUserlogged();
   }

  ngOnInit(): void {
    this.cards = this.serviceCards.getCardsUser();
    this.user= this.serviceCards.getUserlogged();
  }

}
