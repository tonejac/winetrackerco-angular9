import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
	_index:any;
	
	constructor(
		private _globals:Globals,
		private _route:ActivatedRoute,
		private _location:Location
		) { }
	
	ngOnInit(): void {
		this._category = this._route.snapshot.paramMap.get('category');
		this._index = this._route.snapshot.paramMap.get('index');
		
		
		this._slidesContent = this._globals._currentWinesList;
		this._navBarContent = {
			"title": this.getTitle(),
			"cellarTotal": null
		}
		
		setTimeout(()=> {
			this.componentRef.directiveRef.setIndex(this._index);
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
		
		this._location.replaceState('/gallery/' + this._category + '/' + index);
	}
	
	public onSwiperEvent(event: string): void {
		console.log('Swiper event: ', event);
	}
	
	showDetailsPanel(index) {
		console.log('Show Details Panel for:', index);
	}
	
}
