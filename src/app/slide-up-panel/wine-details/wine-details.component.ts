import { Component, OnInit, OnDestroy } from '@angular/core';
import { Globals } from '../../globals';

@Component({
	selector: 'app-wine-details',
	templateUrl: './wine-details.component.html',
	styleUrls: ['./wine-details.component.css']
})
export class WineDetailsComponent implements OnInit, OnDestroy {
	
	_currentCategory:any = 0;
	_categoryChangeSubscriptionObject:any;
	
	constructor(
		private _globals:Globals
	) { }
	
	ngOnInit(): void {
		this._categoryChangeSubscriptionObject = this._globals._slideupPanelCategoryChange.subscribe((data)=> {
			this._globals._currentSlideupPanelCategory = data;
			this._currentCategory = this._globals._currentSlideupPanelCategory;
		});
	}
	
	ngOnDestroy():void {
		this._categoryChangeSubscriptionObject.unsubscribe();
	}
	
	displayComponent(num:Number) {
		if (this._globals._currentSlideupPanelCategory == num) {
			return 'block';
		}
	}
	
}
