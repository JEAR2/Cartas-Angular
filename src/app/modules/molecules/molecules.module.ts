import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AtomsModule } from '../atoms/atoms.module';



@NgModule({
  declarations: [
    SidebarComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    CardComponent,
    FooterComponent
  ]
})
export class MoleculesModule { }
