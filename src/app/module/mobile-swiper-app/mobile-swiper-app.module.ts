import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileSwiperAppRoutingModule } from './mobile-swiper-app-routing.module';
import { MobileSwiperAppComponent } from './mobile-swiper-app.component';

import { SwiperModule } from "swiper/angular";
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MobileSwiperAppComponent
  ],
  imports: [
    CommonModule,
    MobileSwiperAppRoutingModule,
    SwiperModule,
    FormsModule,
    SharedModule
  ]
})
export class MobileSwiperAppModule { }
