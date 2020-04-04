import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { Globals } from '../globals';

@Component({
	selector: 'app-gallery-view',
	templateUrl: './gallery-view.component.html',
	styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent implements OnInit {
	
	public type: string = 'component';
	
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
	
	public _navBarContent:any;
	public _slidesContent:any;
	
	constructor(
		private _globals:Globals
		) { }
	
	ngOnInit(): void {
		this._slidesContent = this._globals._currentWinesList;
		this._navBarContent = {
			"title": "My Past Wines",
			"cellarTotal": null
		}
		
		setTimeout(()=> {
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
