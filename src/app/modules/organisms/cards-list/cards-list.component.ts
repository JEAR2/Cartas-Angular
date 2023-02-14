import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardSave } from 'src/app/Interfaces/cardSave.interface';
import { CardsService } from '../../../services/cards.service';
import { Router } from '@angular/router';
import { User } from '../../../Interfaces/user.interface';


@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  /*cards:CardSave[]=[
    {id: 1, name: 'Rick Sanchez', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', cantidad: 5},
    {id: 2, name: 'Morty Smith', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', cantidad: 5},
    {id: 3, name: 'Summer Smith', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', cantidad: 5},
    {id: 4, name: 'Beth Smith', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', cantidad: 5},
    {id: 5, name: 'Jerry Smith', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg', cantidad: 5},
    {id: 6, name: 'Abadango Cluster Princess', species: 'Alien', image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg', cantidad: 5},
    {id: 7, name: 'Abradolf Lincler', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg', cantidad: 5},
    {id: 8, name: 'Adjudicator Rick', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg', cantidad: 5},
    {id: 9, name: 'Agency Director', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg', cantidad: 5},
    {id: 10, name: 'Alan Rails', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg', cantidad: 5},
    {id: 11, name: 'Albert Einstein', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg', cantidad: 5},
    {id: 12, name: 'Alexander', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg', cantidad: 5},
    {id: 13, name: 'Alien Googah', species: 'Alien', image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg', cantidad: 5}];*/

    @Input() cards:CardSave[];
    @Output() cardBuy = new EventEmitter<CardSave>();
    @Input() dinero:number;
     page!: number;
  constructor(private router:Router) {
    this.cards=[];
    this.dinero=0;
  }

  ngOnInit(): void {
    //this.serviceCards.addCards(this.cards);

  }
  funcion(item:CardSave){
    console.log("holaaa ",item);
    this.cardBuy.emit(item);
    this.router.navigate(['home']);
  }

}
