import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor() { }

  public itemList : any = [];
  public productList = new BehaviorSubject<Item[]>([]);

  getData(): Observable<Item[]> {
    return this.productList.asObservable();
  }

  setData(product: Item[]): void {
    this.itemList.push(...product);
    this.productList.next(product);
  }

  addToFavourite(product:Item): void  {
    this.itemList.push(product);
    this.productList.next(this.itemList);
  }
  
  removeItem(product: Item): void  {
    this.itemList = this.itemList?.filter((image: { id: number }) => image.id !== product.id);
    this.productList.next(this.itemList);

  }
 
}
