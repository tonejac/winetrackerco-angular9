import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
	selector: 'app-gallery-view',
	templateUrl: './gallery-view.component.html',
	styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent implements OnInit {
	
	public type: string = 'component';
	
	public slides = [
		{
			"image": "https://winetrackerco.imgix.net/900bf4c10ce9b0879a1fdb1c7cd30158?w=&h=1024",
			"title": "One"
		},
		{
			"image": "https://winetrackerco.imgix.net/1d5187c0ad4d95548213b03810058cbf?w=&h=1024",
			"title": "Two"
		},
		{
			"image": "https://winetrackerco.imgix.net/4d6d4c42bc5218d64fb134f4a8eb9f5f?w=&h=1024",
			"title": "Three"
		},
		{
			"image": "https://winetrackerco.imgix.net/859a4f1cf65ec4ab73d7535989a82b1a?w=&h=1024",
			"title": "Four"
		}
	];
	
	public config: SwiperConfigInterface = {
		a11y: true,
		direction: 'horizontal',
		slidesPerView: 1,
		keyboard: true,
		navigation: true,
		pagination: true,
		preloadImages: false,
		watchSlidesVisibility: true,
		lazy: {
			loadPrevNext: true
		},
		threshold: 10
	};
	
	private pagination: SwiperPaginationInterface = {
		el: '.swiper-pagination',
		clickable: true,
		hideOnClick: false
	};
	
	@ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
	@ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
	
	@ViewChild(NavBarComponent, {static:false}) _navBarComponent:NavBarComponent;
	
	
	constructor() { }
	
	ngOnInit(): void {
		
		setTimeout(()=> {
			this._navBarComponent.setTitle({
				"title": "My Past Wines"
			});
			
			this.componentRef.directiveRef.setIndex(0);
		}, 0);
	}
	
	public onIndexChange(index: number): void {
		console.log('Swiper index: ', index);
	}
	
	public onSwiperEvent(event: string): void {
		console.log('Swiper event: ', event);
	}
	
}
