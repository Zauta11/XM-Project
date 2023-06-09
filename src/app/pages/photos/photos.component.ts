import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { delay } from 'rxjs';
import { Item } from 'src/app/core/interfaces';
import { ApiService } from 'src/app/infrastructure/api.service';
import { FavouritesService } from 'src/app/infrastructure/favourites.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent {
  
  loading: boolean = false;
  data?: Item[];


  constructor(
    private readonly api: ApiService,
    private readonly fav: FavouritesService,
    private readonly cdRef: ChangeDetectorRef
    )   {

      this.loading = true;
      this.api.getData().pipe(
        delay(3000)
      ).subscribe((res) => {
              this.data = res;
              this.loading = false;
              this.cdRef.markForCheck()
      })

    }
  

  addToFavourites(item: Item): void  {
    this.fav.addToFavourite(item);
        
  }



  trackByFn(index: number, item: Item): number {
    return item.id;
  }

  
  

}
