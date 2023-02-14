import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CardSave } from '../Interfaces/cardSave.interface';
import { addDoc, collection } from '@firebase/firestore';
import { Firestore, collectionData, collectionGroup, doc, getFirestore, orderBy, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../Interfaces/user.interface';
import { redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { Card } from '../Interfaces/card.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private user?:User;
  private url : string = "https://rickandmortyapi.com/api/character?limit=20"

  constructor(private auth: AngularFireAuth,private http:HttpClient,private firestore:Firestore,private router:Router) {
    this.auth.authState.subscribe(user=>{
      console.log('estado del usuario ',user);
      if(!user){
        return;
      }
      //const cardRef = collection(this.firestore,'users');

        //addDoc(mensajeRef,mensaje);

    });
   }


  addCards(cards:CardSave[]){
    console.log("data: ",cards);
    const cardRef = collection(this.firestore,'cards');

    return cards.forEach(card => addDoc(cardRef,card));
  }

  getCards():Observable<CardSave[]>{
    const cardRef = collection(this.firestore,'cards');
    //const data = query(cardRef,orderBy('id'));
    return collectionData(cardRef) as Observable<CardSave[]>;
  }
  getUserlogged():User{
    return this.user!;
  }
  getUsers():Observable<User[]>{
    const cardRef = collection(this.firestore,'users');
    //const data = query(cardRef,orderBy('id'));
    return collectionData(cardRef) as Observable<User[]>;
  }
  getCardsUser():CardSave[]{
    return this.user!.cartas;
  }
  buyCard(card:CardSave):void{
    if(this.user?.dinero!<card.precio){
      alert("Que triste, no le alcanza")
      return
    }
    this.updateCard(card);
    console.log("cartas del usuario ",this.user?.cartas);
    const cardFind = this.user?.cartas.findIndex(cardF=>cardF.uuid===card.uuid) ?? -1
    console.log("valor de cardFind ",cardFind);
    if(cardFind!=-1){
      console.log("entra al if");
      this.user!.cartas[cardFind].cantidad +=1;
    }else{
      console.log("entra al else");
      card.cantidad=1;
      this.user?.cartas.push(card)
    }
    this.user!.dinero-=card.precio;
    console.log("usuario a actualizar ",this.user);
    const db = getFirestore();
    const userRef = doc(db,"users",`${this.user?.uuid}`);
    setDoc(userRef,this.user).then(docRef=>{
      console.log("user actualizado ",docRef);
    });
  }
  updateCard(card:CardSave):void{
    card.cantidad-=1;
    const db = getFirestore();
    const cardRef = doc(db,"cards",`${card.uuid}`);
    setDoc(cardRef,card).then(docRef=>{
      console.log("user actualizado ",docRef);
    });
  }
  addMoney(money:number){
    this.user!.dinero= Number(this.user!.dinero) + Number(money);
    const db = getFirestore();
    const userRef = doc(db,"users",`${this.user?.uuid}`);
    setDoc(userRef,this.user).then(docRef=>{
      console.log("user actualizado ",docRef);
    });
  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(userLog=>{
      this.user={
        nombre:userLog.user?.displayName ?? '',
        correo:userLog.user?.email ?? '',
        uuid:userLog.user?.uid ?? '',
        dinero:0,
        cartas:[]
      }
      this.getUsers().subscribe( user=>{
        console.log("jear ",user);
        const userLoged = user.find(us=>us.uuid===this.user?.uuid);
        if(!userLoged){
          //const cardRef = collection(this.firestore,'users');
          //console.log("jear ",users);
          //addDoc(cardRef,this.user);
          const db = getFirestore();
          setDoc(doc(db,"users",`${this.user?.uuid}`),this.user)
          return;
        }
        this.user=userLoged;
        console.log("usuario logesado",userLoged);
      });
      this.router.navigate(['home']);
      ///redirectLoggedInTo
    });
  }
}
