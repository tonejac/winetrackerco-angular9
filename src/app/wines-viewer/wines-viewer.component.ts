import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

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
	
	constructor(
		private _route:ActivatedRoute,
		private _apiService:ApiService
		) { }
	
	ngOnInit(): void {
		this._category = this._route.snapshot.paramMap.get('category');
		this._type = this._route.snapshot.paramMap.get('type');
		
		this._navBarContent = {
			"title": this.getTitle(),
			"cellarTotal": null
		}
		
		this._apiService.getMyWines(this._category).subscribe((response:any)=> {
			this._winesData = response;
		});
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
	
	isGallery():Boolean {
		if (this._type == 'gallery') {
			return true;
		} else {
			return false;
		}
	}
	
	isGrid():Boolean {
		if (this._type == 'grid') {
			return true;
		} else {
			return false;
		}
	}
	
	isList():Boolean {
		if (this._type == 'list') {
			return true;
		} else {
			return false;
		}
	}
	
}
