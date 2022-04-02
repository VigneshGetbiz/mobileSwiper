import { ChangeDetectorRef, Component, NgIterable, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller, Swiper } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { PaginationOptions } from 'swiper/types';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller]);


@Component({
  selector: 'app-mobile-swiper-app',
  templateUrl: './mobile-swiper-app.component.html',
  styleUrls: ['./mobile-swiper-app.component.scss']
})
export class MobileSwiperAppComponent implements OnInit {

  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

  // slides$ = new BehaviorSubject<string[]>(['']);
  constructor (private cd: ChangeDetectorRef) { }


  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 10 },
    768: { slidesPerView: 3, spaceBetween: 10 },
    1024: { slidesPerView: 3, spaceBetween: 10 },
  };


  // slides: any[] = Array.from({ length: 3 }).map((el, index) => {
  //   console.log(`Slide ${index + 1},${el}`);


  //   return `Slide ${index + 1}`
  // });

  apps: any = [
    {
      "custom_app_id": "1",
      "custom_app_icon_name": "app1",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app1",
      "custom_app_title_bar_name": "app1",
      "custom_app_development_status": "1"
    },
    {
      "custom_app_id": "2",
      "custom_app_icon_name": "app2",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app2",
      "custom_app_title_bar_name": "app2",
      "custom_app_development_status": "2"
    },
    {
      "custom_app_id": "3",
      "custom_app_icon_name": "app3",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app3",
      "custom_app_title_bar_name": "app3",
      "custom_app_development_status": ""
    },
    {
      "custom_app_id": "4",
      "custom_app_icon_name": "app4",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app4",
      "custom_app_title_bar_name": "app4",
      "custom_app_development_status": "4"
    },
    {
      "custom_app_id": "5",
      "custom_app_icon_name": "app5",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app5",
      "custom_app_title_bar_name": "app5",
      "custom_app_development_status": "5"
    },
    {
      "custom_app_id": "6",
      "custom_app_icon_name": "app6",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app6",
      "custom_app_title_bar_name": "app6",
      "custom_app_development_status": "6"
    },
    {
      "custom_app_id": "7",
      "custom_app_icon_name": "app7",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app7",
      "custom_app_title_bar_name": "app7",
      "custom_app_development_status": "7"
    },
    {
      "custom_app_id": "8",
      "custom_app_icon_name": "app8",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app8",
      "custom_app_title_bar_name": "app8",
      "custom_app_development_status": "8"
    },
    {
      "custom_app_id": "9",
      "custom_app_icon_name": "app9",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app9",
      "custom_app_title_bar_name": "app9",
      "custom_app_development_status": "9"
    },
    {
      "custom_app_id": "10",
      "custom_app_icon_name": "app10",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app10",
      "custom_app_title_bar_name": "app10",
      "custom_app_development_status": "10"
    },
    {
      "custom_app_id": "11",
      "custom_app_icon_name": "app11",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app11",
      "custom_app_title_bar_name": "app11",
      "custom_app_development_status": "11"
    },
    {
      "custom_app_id": "12",
      "custom_app_icon_name": "app12",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app12",
      "custom_app_title_bar_name": "app12",
      "custom_app_development_status": "12"
    },
    {
      "custom_app_id": "13",
      "custom_app_icon_name": "app13",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app13",
      "custom_app_title_bar_name": "app13",
      "custom_app_development_status": "13"
    },
    {
      "custom_app_id": "14",
      "custom_app_icon_name": "app14",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app14",
      "custom_app_title_bar_name": "app14",
      "custom_app_development_status": "14"
    },
    {
      "custom_app_id": "15",
      "custom_app_icon_name": "app15",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app15",
      "custom_app_title_bar_name": "app15",
      "custom_app_development_status": "15"
    },
    {
      "custom_app_id": "16",
      "custom_app_icon_name": "app16",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app16",
      "custom_app_title_bar_name": "app16",
      "custom_app_development_status": "16"
    },
    {
      "custom_app_id": "17",
      "custom_app_icon_name": "app17",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app17",
      "custom_app_title_bar_name": "app17",
      "custom_app_development_status": "17"
    },
    {
      "custom_app_id": "18",
      "custom_app_icon_name": "app18",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app18",
      "custom_app_title_bar_name": "app18",
      "custom_app_development_status": "18"
    },
    {
      "custom_app_id": "19",
      "custom_app_icon_name": "app19",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app19",
      "custom_app_title_bar_name": "app19",
      "custom_app_development_status": "19"
    },
    {
      "custom_app_id": "20",
      "custom_app_icon_name": "app20",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app20",
      "custom_app_title_bar_name": "app20",
      "custom_app_development_status": "20"
    },
    {
      "custom_app_id": "21",
      "custom_app_icon_name": "app21",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app21",
      "custom_app_title_bar_name": "app21",
      "custom_app_development_status": "21"
    },
    {
      "custom_app_id": "22",
      "custom_app_icon_name": "app22",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app22",
      "custom_app_title_bar_name": "app22",
      "custom_app_development_status": "22"
    },
    {
      "custom_app_id": "23",
      "custom_app_icon_name": "app23",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app23",
      "custom_app_title_bar_name": "app23",
      "custom_app_development_status": "23"
    },
    {
      "custom_app_id": "24",
      "custom_app_icon_name": "app24",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app24",
      "custom_app_title_bar_name": "app24",
      "custom_app_development_status": "24"
    },
    {
      "custom_app_id": "25",
      "custom_app_icon_name": "app25",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app25",
      "custom_app_title_bar_name": "app25",
      "custom_app_development_status": "25"
    },
    {
      "custom_app_id": "26",
      "custom_app_icon_name": "app26",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app26",
      "custom_app_title_bar_name": "app26",
      "custom_app_development_status": "26"
    },
    {
      "custom_app_id": "27",
      "custom_app_icon_name": "app27",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app27",
      "custom_app_title_bar_name": "app27",
      "custom_app_development_status": "27"
    },
    {
      "custom_app_id": "28",
      "custom_app_icon_name": "app28",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app28",
      "custom_app_title_bar_name": "app28",
      "custom_app_development_status": "28"
    },
    {
      "custom_app_id": "29",
      "custom_app_icon_name": "app29",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app29",
      "custom_app_title_bar_name": "app29",
      "custom_app_development_status": "29"
    },
    {
      "custom_app_id": "30",
      "custom_app_icon_name": "app30",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app30",
      "custom_app_title_bar_name": "app30",
      "custom_app_development_status": "30"
    },
    {
      "custom_app_id": "31",
      "custom_app_icon_name": "app31",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app31",
      "custom_app_title_bar_name": "app31",
      "custom_app_development_status": "31"
    },
    {
      "custom_app_id": "32",
      "custom_app_icon_name": "app32",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app32",
      "custom_app_title_bar_name": "app32",
      "custom_app_development_status": "32"
    },
    {
      "custom_app_id": "33",
      "custom_app_icon_name": "app33",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app33",
      "custom_app_title_bar_name": "app33",
      "custom_app_development_status": "33"
    },
    {
      "custom_app_id": "34",
      "custom_app_icon_name": "app34",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app34",
      "custom_app_title_bar_name": "app34",
      "custom_app_development_status": "34"
    },
    {
      "custom_app_id": "35",
      "custom_app_icon_name": "app35",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app35",
      "custom_app_title_bar_name": "app35",
      "custom_app_development_status": "35"
    },
    {
      "custom_app_id": "36",
      "custom_app_icon_name": "app36",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app36",
      "custom_app_title_bar_name": "app36",
      "custom_app_development_status": "36"
    },
    {
      "custom_app_id": "37",
      "custom_app_icon_name": "app37",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app37",
      "custom_app_title_bar_name": "app37",
      "custom_app_development_status": "37"
    },
    {
      "custom_app_id": "38",
      "custom_app_icon_name": "app38",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app38",
      "custom_app_title_bar_name": "app38",
      "custom_app_development_status": "38"
    },
    {
      "custom_app_id": "39",
      "custom_app_icon_name": "app39",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app39",
      "custom_app_title_bar_name": "app39",
      "custom_app_development_status": "39"
    },
    {
      "custom_app_id": "40",
      "custom_app_icon_name": "app40",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app40",
      "custom_app_title_bar_name": "app40",
      "custom_app_development_status": "40"
    },

    {
      "custom_app_id": "41",
      "custom_app_icon_name": "app41",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app41",
      "custom_app_title_bar_name": "app41",
      "custom_app_development_status": "41"
    }, {
      "custom_app_id": "42",
      "custom_app_icon_name": "app42",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app42",
      "custom_app_title_bar_name": "app42",
      "custom_app_development_status": "42"
    }, {
      "custom_app_id": "43",
      "custom_app_icon_name": "app43",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app43",
      "custom_app_title_bar_name": "app43",
      "custom_app_development_status": "43"
    }, {
      "custom_app_id": "44",
      "custom_app_icon_name": "app44",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app44",
      "custom_app_title_bar_name": "app44",
      "custom_app_development_status": "44"
    }, {
      "custom_app_id": "45",
      "custom_app_icon_name": "app45",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app45",
      "custom_app_title_bar_name": "app45",
      "custom_app_development_status": "45"
    }, {
      "custom_app_id": "46",
      "custom_app_icon_name": "app46",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app46",
      "custom_app_title_bar_name": "app46",
      "custom_app_development_status": "46"
    }, {
      "custom_app_id": "47",
      "custom_app_icon_name": "app47",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app47",
      "custom_app_title_bar_name": "app47",
      "custom_app_development_status": "47"
    }, {
      "custom_app_id": "48",
      "custom_app_icon_name": "app48",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app48",
      "custom_app_title_bar_name": "app48",
      "custom_app_development_status": "48"
    }, {
      "custom_app_id": "49",
      "custom_app_icon_name": "app49",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app49",
      "custom_app_title_bar_name": "app49",
      "custom_app_development_status": "49"
    }, {
      "custom_app_id": "50",
      "custom_app_icon_name": "app50",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app50",
      "custom_app_title_bar_name": "app50",
      "custom_app_development_status": "50"
    },
    {
      "custom_app_id": "51",
      "custom_app_icon_name": "app51",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app51",
      "custom_app_title_bar_name": "app51",
      "custom_app_development_status": "51"
    },
    {
      "custom_app_id": "52",
      "custom_app_icon_name": "app52",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app52",
      "custom_app_title_bar_name": "app52",
      "custom_app_development_status": "52"
    },
    {
      "custom_app_id": "53",
      "custom_app_icon_name": "app53",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app53",
      "custom_app_title_bar_name": "app53",
      "custom_app_development_status": "53"
    },
    {
      "custom_app_id": "54",
      "custom_app_icon_name": "app54",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app54",
      "custom_app_title_bar_name": "app54",
      "custom_app_development_status": "54"
    },
    {
      "custom_app_id": "55",
      "custom_app_icon_name": "app55",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app55",
      "custom_app_title_bar_name": "app55",
      "custom_app_development_status": "55"
    },
    {
      "custom_app_id": "56",
      "custom_app_icon_name": "app56",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app56",
      "custom_app_title_bar_name": "app56",
      "custom_app_development_status": "56"
    },
    {
      "custom_app_id": "57",
      "custom_app_icon_name": "app57",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app57",
      "custom_app_title_bar_name": "app57",
      "custom_app_development_status": "57"
    },
    {
      "custom_app_id": "58",
      "custom_app_icon_name": "app58",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app58",
      "custom_app_title_bar_name": "app58",
      "custom_app_development_status": "58"
    },
    {
      "custom_app_id": "59",
      "custom_app_icon_name": "app59",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app59",
      "custom_app_title_bar_name": "app59",
      "custom_app_development_status": "59"
    },
    {
      "custom_app_id": "60",
      "custom_app_icon_name": "app60",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app60",
      "custom_app_title_bar_name": "app60",
      "custom_app_development_status": "60"
    },
    {
      "custom_app_id": "61",
      "custom_app_icon_name": "app61",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app61",
      "custom_app_title_bar_name": "app61",
      "custom_app_development_status": "61"
    },
    {
      "custom_app_id": "62",
      "custom_app_icon_name": "app62",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app62",
      "custom_app_title_bar_name": "app62",
      "custom_app_development_status": "62"
    }, {
      "custom_app_id": "63",
      "custom_app_icon_name": "app63",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app63",
      "custom_app_title_bar_name": "app63",
      "custom_app_development_status": "63"
    }, {
      "custom_app_id": "64",
      "custom_app_icon_name": "app64",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app64",
      "custom_app_title_bar_name": "app64",
      "custom_app_development_status": "64"
    }, {
      "custom_app_id": "65",
      "custom_app_icon_name": "app65",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app65",
      "custom_app_title_bar_name": "app65",
      "custom_app_development_status": "65"
    }, {
      "custom_app_id": "66",
      "custom_app_icon_name": "app66",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app66",
      "custom_app_title_bar_name": "app66",
      "custom_app_development_status": "66"
    }, {
      "custom_app_id": "67",
      "custom_app_icon_name": "app67",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app67",
      "custom_app_title_bar_name": "app67",
      "custom_app_development_status": "67"
    }, {
      "custom_app_id": "68",
      "custom_app_icon_name": "app68",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app68",
      "custom_app_title_bar_name": "app68",
      "custom_app_development_status": "68"
    }, {
      "custom_app_id": "69",
      "custom_app_icon_name": "app69",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app69",
      "custom_app_title_bar_name": "app69",
      "custom_app_development_status": "69"
    },
    {
      "custom_app_id": "70",
      "custom_app_icon_name": "app70",
      "custom_app_icon_image": "Image File Name",
      "custom_app_full_name": "app70",
      "custom_app_title_bar_name": "app70",
      "custom_app_development_status": "70"
    },

  ];


  slides: Array<any> = [1];

  get slidesCount (): NgIterable<any> {
    let result: Array<any> = this.slides;

    if (result.length < 3) {
      // this.breakpoints = {
      //   640: { slidesPerView: 2, spaceBetween: 10 },
      //   768: { slidesPerView: 2, spaceBetween: 10 },
      //   1024: { slidesPerView: 2, spaceBetween: 10 },
      // };
    }
    return result;
  }

  pagination: PaginationOptions = {
    el: '.swiper-pagination.pagination-test',
    clickable: true,
    clickableClass: 'swiper-pagination-clickable'
  };




  test: Array<any> = [];
  testing: Array<any> = [];

  ngOnInit () {
    let count: any = 1;
    let mul = 30;


    // this.apps.forEach((t: AppsDetails) => {

    //   let k: [{ user_app_category_name: string, data: any[]; }] | any = { user_app_category_name: t.user_app_category_name, data: [] };
    //   let appCount = 0;

    //   if (this.apps.length > 6 && count < 6) {
    //     count = count + 1;

    //     for (const i of t.data) {
    //       // appCount = appCount + t.data.length;
    //       // if (this.apps.length > 6 && appCount < 25) {
    //       //   count = count + 1;
    //       // }
    //       k.data.push({
    //         custom_app_id: i.custom_app_id,
    //         custom_app_icon_name: i.custom_app_icon_name,
    //         custom_app_icon_image: i.custom_app_icon_image,
    //         custom_app_full_name: i.custom_app_full_name,
    //         custom_app_title_bar_name: i.custom_app_title_bar_name,
    //         custom_app_development_status: i.custom_app_development_status,
    //         parent_app: count,
    //       });
    //     }

    //   }





    //   // if (this.apps.length > 6) {
    //   //   count = count + 1;
    //   // }


    //   // console.log(k);

    //   // console.log(this.apps.length);

    //   this.test.push(k);
    //   // k.push()
    // });


    // for (let i = 0; i < this.apps.length; i++) {

    //   let k: [{ user_app_category_name: string, data: any[]; }] | any = { user_app_category_name: this.apps[i].user_app_category_name, data: [] };
    //   // let appCount = 0;

    //   // console.log(i > 5);

    //   if (i > Math.abs(7 - (this.apps[i].data.length + this.apps.length))) {
    //     count = count + 1;
    //     // console.log(this.apps[i].user_app_category_name);
    //   }

    //   console.log(Math.abs(7 - (this.apps[i].data.length + this.apps.length)));

    //   for (const t of this.apps[i].data) {
    //     // appCount = appCount + t.data.length;
    //     // if (this.apps.length > 6 && appCount < 25) {
    //     //   count = count + 1;
    //     // }
    //     k.data.push({
    //       custom_app_id: t.custom_app_id,
    //       custom_app_icon_name: t.custom_app_icon_name,
    //       custom_app_icon_image: t.custom_app_icon_image,
    //       custom_app_full_name: t.custom_app_full_name,
    //       custom_app_title_bar_name: t.custom_app_title_bar_name,
    //       custom_app_development_status: t.custom_app_development_status,
    //       parent_app: count,
    //     });

    //   }

    //   this.test.push(k);

    //   // console.log(this.test);

    // }



    for (let i = 0; i < this.apps.length; i++) {

      let k: any = [];
      // console.log(Math.abs(7 - (this.apps[i].data.length + this.apps.length)));

      k.push({
        custom_app_id: this.apps[i].custom_app_id,
        custom_app_icon_name: this.apps[i].custom_app_icon_name,
        custom_app_icon_image: this.apps[i].custom_app_icon_image,
        custom_app_full_name: this.apps[i].custom_app_full_name,
        custom_app_title_bar_name: this.apps[i].custom_app_title_bar_name,
        custom_app_development_status: this.apps[i].custom_app_development_status,
        parent_app: count,
      });



      this.test.push(...k);
    }


    for (let i = 0; i < this.test.length; i++) {


      // let appCount = 0;

      // console.log(i > 5);


      // if (i < mul) {
      //   this.test[i].parent_app = count;
      //   // console.log(this.apps[i].user_app_category_name);
      // } else {
      //   count = count + 1;
      //   mul = mul * 2;
      // }


      if (i + 1 <= mul) {
        this.test[i].parent_app = count;
        // console.log(this.apps[i].user_app_category_name);
      } else {
        count = count + 1;
        this.slides.push(count);

        // console.log('false');
        this.test[i].parent_app = count;
        mul = mul + 30;
      }
      // console.log(i + 1 <= mul, i, mul, count, this.test[i].parent_app);

      // console.log(this.test[i]);

      console.log(this.slides);

    }


    // console.log(this.test);



  }



  log (log: Swiper) {
    // console.log(log);
    // let app = this.apps;
    // console.log(app);
  }


  logg (t) {
    // console.log(t);

  }

  logs (log: any) {
    // let t: Swiper = log[0];
    // let app = this.apps;

    // app.forEach((val) => {

    //   // console.log(val);


    //   for (const i of val.data) {
    //     if (i.custom_app_id == t.realIndex + 1) {
    //       console.log(i);

    //       this.apps.data = { data: 'vignesh' };
    //     }
    //   }


    // });

    // console.log(t.realIndex);
  }

  // breakPointsToggle: boolean;
  // breakpointChange() {
  //   this.breakPointsToggle = !this.breakPointsToggle;
  //   this.breakpoints = {
  //     640: { slidesPerView: 2, spaceBetween: 20 },
  //     768: { slidesPerView: 3, spaceBetween: 40 },
  //     1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 },
  //   };
  // }

  beforeTransitionStart (params: any['beforeSlideChangeStart']) {
    const [swiper, speed, internal] = params;
    // console.log('beforeTransitionStart, speed: ' + speed);
    // console.log(swiper);
    // console.log(internal);
  }



}

interface AppsDetails {
  user_app_category_name: string;
  data: AppData[];
}

interface AppData {
  custom_app_id: string;
  custom_app_icon_name: string;
  custom_app_icon_image: string;
  custom_app_full_name: string;
  custom_app_title_bar_name: string;
  custom_app_development_status: string;
  parent_app?: number;
}
