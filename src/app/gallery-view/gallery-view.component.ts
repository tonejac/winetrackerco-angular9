import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Globals } from '../globals';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-gallery-view',
	templateUrl: './gallery-view.component.html',
	styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent implements OnInit {
	
	@Input() winesConfig:any;
	
	public type: string = 'component';
	
	public config:SwiperConfigInterface;
	
	private pagination:SwiperPaginationInterface;
	
	@ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
	@ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
	
	public _navBarContent:any;
	public _slidesContent:any = null;
	_category:String;
	_index:any;
	
	constructor(
		private _globals:Globals,
		private _route:ActivatedRoute,
		private _location:Location,
		private _apiService:ApiService
		) { }
	
	ngOnInit(): void {
		this._index = this._route.snapshot.paramMap.get('index');
		
		this._slidesContent = this.winesConfig;
		
		setTimeout(()=> {
			this.config = {
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
			
			this.pagination = {
				el: '.swiper-pagination',
				clickable: true,
				hideOnClick: false
			};
		}, 0);
		
		setTimeout(()=> {
			this.componentRef.directiveRef.setIndex(this._index);
		}, 1);
		
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
	
	getFirstPartOfScore(scoreNumber:String):String {
		let wholeNumber = String(scoreNumber).split('.')[0];
		return wholeNumber;
	}
	
	getLastPartOfScore(scoreNumber:String):String {
		let decimal = String(scoreNumber).split('.')[1];
		return decimal;
	}
}
