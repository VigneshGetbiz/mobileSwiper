import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileSwiperAppRoutingModule } from './mobile-swiper-app-routing.module';
import { MobileSwiperAppComponent } from './mobile-swiper-app.component';

import { SwiperModule } from "swiper/angular";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MobileSwiperAppComponent
  ],
  imports: [
    CommonModule,
    MobileSwiperAppRoutingModule,
    SwiperModule,
    FormsModule
  ]
})
export class MobileSwiperAppModule { }
