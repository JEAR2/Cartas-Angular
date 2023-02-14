import { Component, OnInit } from '@angular/core';
import { CardSave } from 'src/app/Interfaces/cardSave.interface';
import { CardsService } from 'src/app/services/cards.service';
import { User } from '../../../Interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards:CardSave[];
  user:User;
  constructor(private serviceCards:CardsService) {
    this.cards=[];
    this.user = serviceCards.getUserlogged();
  }

  ngOnInit(): void {
    this.serviceCards.getCards().subscribe(data=>{
      this.cards= data;
    });
    this.user= this.serviceCards.getUserlogged();
  }
  buyCard(card:CardSave){
    //this.user.cartas.push(card);
    this.serviceCards.buyCard(card);
    console.log("object de buy user ",this.user);
    console.log("object de buy  cards ",card);
  }

}
