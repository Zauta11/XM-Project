import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor() { }

  public itemList : any = [];
  public imgList = new BehaviorSubject<Item[]>([]);

  getData(): Observable<Item[]> {
    return this.imgList.asObservable();
  }

  addToFavourite(newImage: Item): void  {
   this.itemList = this.itemList.filter((item: { id: number }) => item.id !== newImage.id);
   this.itemList.push(newImage);
   this.imgList.next(this.itemList);
  }
  
  removeItem(img: Item): void  {
    this.itemList = this.itemList.filter((image: { id: number }) => image.id !== img.id);
    this.imgList.next(this.itemList);

  }
 
}
