import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileSwiperAppComponent } from './mobile-swiper-app.component';

const routes: Routes = [
  { path: '', component: MobileSwiperAppComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileSwiperAppRoutingModule { }
