import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AtomsModule } from './modules/atoms/atoms.module';
import { OrganismsModule } from './modules/organisms/organisms.module';
import { MoleculesModule } from './modules/molecules/molecules.module';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AuthModule } from './modules/auth/auth.module';
import { AngularFireModule } from '@angular/fire/compat';
import { PagesModule } from './modules/pages/pages.module';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    PagesModule,
    AuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
