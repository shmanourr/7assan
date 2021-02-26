import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    this.db.list('/products').push(product);
  }

  get(){
    return this.db.list('/products').snapshotChanges();
  }

  getByID(productID : string){
    return this.db.object('/products' + productID).valueChanges();
  }
}
