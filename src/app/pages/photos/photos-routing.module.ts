import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePhotoComponent } from '../single-photo/single-photo.component';
import { PhotosComponent } from './photos.component';

const routes: Routes = [
  {
    path: "",
    component: PhotosComponent
  },
  {
    path: "photos/:id",
    component: SinglePhotoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
