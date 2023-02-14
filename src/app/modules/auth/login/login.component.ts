import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private cardService:CardsService) {

   }

  ngOnInit(): void {
  }
  login(){
      this.cardService.login();
    }


}
