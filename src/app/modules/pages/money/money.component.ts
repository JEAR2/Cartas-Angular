import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements OnInit {

  dinero:number;
  constructor(private serviceCards:CardsService) {
    this.dinero=0;
  }

  ngOnInit(): void {
  }

  recargar(){
    this.serviceCards.addMoney(this.dinero);
  }

}
