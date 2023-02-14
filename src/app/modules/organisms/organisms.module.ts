import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './cards-list/cards-list.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { AuthModule } from '../auth/auth.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    CardsListComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    AtomsModule,
    MoleculesModule
  ],
  exports:[
    CardsListComponent,
  ]
})
export class OrganismsModule { }
