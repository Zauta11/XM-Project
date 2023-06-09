import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { MatCardModule } from '@angular/material/card';
import { SinglePhotoComponent } from '../single-photo/single-photo.component';
import { MatButtonModule } from '@angular/material/button';
import { PhotosComponent } from './photos.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    PhotosComponent,
    SinglePhotoComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule

  ]
})
export class PhotosModule { }
