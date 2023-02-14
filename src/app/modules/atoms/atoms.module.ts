import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ImageComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    ImageComponent,
    ContentComponent
  ]
})
export class AtomsModule { }
