import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Globals } from '../globals';

@Component({
	selector: 'app-wines-viewer',
	templateUrl: './wines-viewer.component.html',
	styleUrls: ['./wines-viewer.component.css']
})

export class WinesViewerComponent implements OnInit {
	
	_navBarContent:Object;
	_category:String;
	_type:String;
	_winesData:Object = null;
	_isGallery:Boolean = false;
	_isGrid:Boolean = false;
	_isList:Boolean = false;
	
	constructor(
		private _route:ActivatedRoute,
		private _apiService:ApiService,
		private _globals:Globals
	) {
		
	}
	
	ngOnInit(): void {
		this._category = this._route.snapshot.paramMap.get('category');
		this._type = this._route.snapshot.paramMap.get('type');
		
		this._navBarContent = {
			"title": this.getTitle(),
			"cellarTotal": null
		}
		
		this._winesData = this._route.snapshot.data.apiData;
		this._globals._currentWinesList = this._winesData;
		console.log(this._winesData);
			
		this._globals._wineViewerCategoryChange.subscribe(()=> {
			this.setType();
		});
		
		this.setType();
		
	}
	
	setType():void {
		console.log('setType');
		this._type = this._route.snapshot.paramMap.get('type');
		this.isGallery();
		this.isGrid();
		this.isList();
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
	
	isGallery():void {
		if (this._type == 'gallery') {
			this._isGallery = true;
		} else {
			this._isGallery = false;
		}
	}
	
	isGrid():void {
		if (this._type == 'grid') {
			this._isGrid = true;
		} else {
			this._isGrid = false;
		}
	}
	
	isList():void {
		if (this._type == 'list') {
			this._isList = true;
		} else {
			this._isList = false;
		}
	}
	
}
