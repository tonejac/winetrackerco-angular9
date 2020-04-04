import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { ActivatedRoute } from '@angular/router';
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
	_category:String;
	
	constructor(
		private _globals:Globals,
		private _route:ActivatedRoute
		) { }
	
	ngOnInit(): void {
		this._category = this._route.snapshot.paramMap.get('category');
		
		
		this._slidesContent = this._globals._currentWinesList;
		this._navBarContent = {
			"title": this.getTitle(),
			"cellarTotal": null
		}
		
		setTimeout(()=> {
			this.componentRef.directiveRef.setIndex(0);
		}, 0);
	}
	
	getTitle() {
		if (this._category == 'past') {
			return 'My Past Wines';
		} else if (this._category == 'cellar') {
			return 'My Cellar Wines';
		} else if (this._category == 'wishlist') {
			return 'My Wishlist Wines';
		}
	}
	
	public onIndexChange(index: number): void {
		console.log('Swiper index: ', index);
	}
	
	public onSwiperEvent(event: string): void {
		console.log('Swiper event: ', event);
	}
	
}
