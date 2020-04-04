import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Globals } from './globals';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoryButtonComponent } from './category-button/category-button.component';
import { MyWinesComponent } from './my-wines/my-wines.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ViewSwitcherComponent } from './nav-bar/view-switcher/view-switcher.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	observer: true,
	direction: 'horizontal',
	threshold: 50,
	spaceBetween: 5,
	slidesPerView: 1,
	centeredSlides: true
};

@NgModule({
	declarations: [
		AppComponent,
		GalleryViewComponent,
		HomeComponent,
		NavMenuComponent,
		NavBarComponent,
		CategoryButtonComponent,
		MyWinesComponent,
		ListViewComponent,
		GridViewComponent,
		ViewSwitcherComponent
	],
	imports: [
		SwiperModule,
		BrowserModule,
		AppRoutingModule
	],
	providers: [
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG
		},
		Globals
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
