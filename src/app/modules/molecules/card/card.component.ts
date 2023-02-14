import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardSave } from 'src/app/Interfaces/cardSave.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 // @Input() nombre:string;
  //@Input() especie:string;
  //@Input() precio:number;
  //@Input() imagen:string;
  //@Input() cantidad:number;
  @Input() cardSelect:CardSave;
  @Output() cardBuy = new EventEmitter<CardSave>();
  constructor() {
    this.cardSelect = {
      id:0,
      name:'',
      species:'',
      image:'',
      cantidad:0,
      precio:0,
      uuid:''
    }
   }

  ngOnInit(): void {
  }
  funcion(){
    this.cardBuy.emit(this.cardSelect);
  }

}
