import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products= [ 
    {id: 0, name:'Bacon', price: '5.50', icon: 'bacon-solid', color: 'accent', quantity: 0},
    {id: 1, name:'Ice Cream', price: '3.75', icon: 'ice-cream-solid', color: 'primary', quantity: 0},
    {id: 2, name:'Utensils', price: '9.25', icon: 'utensils-solid', color: 'warm', quantity: 0}
  ];

  private _countSubject = new Subject<number>();
  count$=this._countSubject.asObservable();
  

  getProducts() {
    return this.products;
  }

  getTotalCount() {
    let totalCount=0
    for (let product of this.products) {
    totalCount+=product.quantity;
    }
    this._countSubject.next(totalCount);
  }
}

