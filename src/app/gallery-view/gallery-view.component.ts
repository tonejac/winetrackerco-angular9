import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WineDetailsComponent } from '../slide-up-panel/wine-details/wine-details.component';
import { SlideUpPanelComponent } from '../slide-up-panel/slide-up-panel.component';
import { Globals } from '../globals';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
declare var $:any;

@Component({
	selector: 'app-gallery-view',
	templateUrl: './gallery-view.component.html',
	styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent implements OnInit {
	
	@Input() winesConfig:any;
	@ViewChild(SlideUpPanelComponent, {static:false}) _slideUpPanel:SlideUpPanelComponent;
	public type: string = 'component';
	public config:SwiperConfigInterface;
	private pagination:SwiperPaginationInterface;
	@ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
	@ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
	public _navBarContent:any;
	public _slidesContent:any = null;
	_category:String;
	_index:any;
	_tabsConfig:any;
	_contentComponent:any;
	
	
	constructor(
		private _globals:Globals,
		private _route:ActivatedRoute,
		private _location:Location,
		private _apiService:ApiService
		) { }
	
	ngOnInit(): void {
		this._index = this._route.snapshot.paramMap.get('index');
		this._category = this._route.snapshot.paramMap.get('category');
		this._slidesContent = this.winesConfig;
		
		this._tabsConfig = {
			"tabsArray": [
				{
					"label": "Me",
					"view": "my"
				},
				{
					"label": "Overview",
					"view": "overview"
				},
				{
					"label": "Scores",
					"view": "scores"
				},
				{
					"label": "Comments",
					"view": "comments"
				}
			]
		}
		
		this._contentComponent = WineDetailsComponent;
		
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
			
			$('.loading-icon-container').hide();
		}, 0);
		
		setTimeout(()=> {
			this.componentRef.directiveRef.setIndex(this._index);
		}, 1);
		
	}
	
	public onIndexChange(index: number): void {
		console.log('Swiper index: ', index);
		
		this._location.replaceState('/mywines/' + this._category + '/gallery/' + index);
		this._globals._currentWine = this._globals._currentWinesList[index];
		this._globals._currentWineChange.emit();
	}
	
	public onSwiperEvent(event: string): void {
		console.log('Swiper event: ', event);
	}
	
	showDetailsPanel(index) {
		console.log('Show Details Panel for:', index);
		this._slideUpPanel.open();
	}
	
	getFirstPartOfScore(scoreNumber:String):String {
		if (scoreNumber == '0' || scoreNumber == null) {
			return '--';
		}
		let wholeNumber = String(scoreNumber).split('.')[0];
		return wholeNumber;
	}
	
	getLastPartOfScore(scoreNumber:String):String {
		if (scoreNumber == '0' || scoreNumber == null) {
			return '-';
		}
		let decimal = String(scoreNumber).split('.')[1];
		if (decimal == undefined) {
			decimal = '0';
		}
		return decimal;
	}
}
