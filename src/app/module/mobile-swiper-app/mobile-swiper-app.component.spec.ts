import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSwiperAppComponent } from './mobile-swiper-app.component';

describe('MobileSwiperAppComponent', () => {
  let component: MobileSwiperAppComponent;
  let fixture: ComponentFixture<MobileSwiperAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSwiperAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSwiperAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
