import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OrganismsModule } from '../organisms/organisms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { PassCardComponent } from './pass-card/pass-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MoneyComponent } from './money/money.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    MyCardsComponent,
    InfoUserComponent,
    PassCardComponent,
    MoneyComponent

  ],
  imports: [
    CommonModule,
    AtomsModule,
    NgxPaginationModule,
    OrganismsModule,
    MoleculesModule,
    FormsModule
  ],
  exports:[HomeComponent,MoneyComponent]
})
export class PagesModule { }
