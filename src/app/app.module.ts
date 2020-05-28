import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRouteSnapshot } from '@angular/router';

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
import { TrackAWineComponent } from './track-a-wine/track-a-wine.component';
import { InputWineComponent } from './track-a-wine/input-wine/input-wine.component';
import { TouchTagsComponent } from './slide-up-panel/touch-tags/touch-tags.component';
import { RegularButtonComponent } from './regular-button/regular-button.component';
import { SlideUpPanelComponent } from './slide-up-panel/slide-up-panel.component';
import { NavTabsComponent } from './slide-up-panel/nav-tabs/nav-tabs.component';
import { SlideUpPanelDirective } from './slide-up-panel/slide-up-panel.directive';
import { WineDetailsComponent } from './slide-up-panel/wine-details/wine-details.component';
import { LoginChoiceComponent } from './user/login-choice/login-choice.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { AuthGuard } from './auth.guard';
import { ConfirmationMessageComponent } from './confirmation-message/confirmation-message.component';
import { GroupTastingComponent } from './group-tasting/group-tasting.component';

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
		ViewSwitcherComponent,
		TrackAWineComponent,
		InputWineComponent,
		TouchTagsComponent,
		RegularButtonComponent,
		SlideUpPanelComponent,
		NavTabsComponent,
		SlideUpPanelDirective,
		WineDetailsComponent,
		LoginChoiceComponent,
		SignupComponent,
		SigninComponent,
		ConfirmationMessageComponent,
		GroupTastingComponent
	],
	imports: [
		SwiperModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG
		},
		Globals,
		AuthGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
