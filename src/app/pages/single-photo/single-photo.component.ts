import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { Item } from 'src/app/core/interfaces';
import { FavouritesService } from 'src/app/infrastructure/favourites.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinglePhotoComponent {

  photo?: Item;
  photoId: number; 
  image: any;
  data?: Item[];

  constructor(
      private readonly favService: FavouritesService, 
      private readonly activatedRoute: ActivatedRoute,
      private readonly router: Router,
      private readonly cdRef: ChangeDetectorRef
      ) {
    
        this.photoId = this.activatedRoute.snapshot.params["id"];
        this.getSinglePhoto();

      }
     

      getSinglePhoto(): void {
        this.favService
        .getData()
        .pipe(
          catchError(() => {
            alert('Error');
    
            return EMPTY;
          })
        ).subscribe((res) => {
          this.data = res;
          let index = this.data.findIndex((photo: {id: number}) => photo.id === this.photoId);
          index > -1 ? this.image = this.data[index] : 0;
          this.cdRef.markForCheck();
        })
      }

      removeImage(item: Item): void {
        this.favService.removeItem(item);
        alert("Image Removed Successfully !");
        this.router.navigate(['favourites']);
      }


}

