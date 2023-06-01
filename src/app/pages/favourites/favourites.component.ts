import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/interfaces';
import { FavouritesService } from 'src/app/infrastructure/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FavouritesComponent {

  constructor(
    private readonly favService: FavouritesService,
    private readonly router: Router,
    ) {  }

  favPhotos$: Observable <Item[]> = this.favService.getData();

  getImage(image: Item): void  {
    this.router.navigate(['photos', image.id]);
  }

}
