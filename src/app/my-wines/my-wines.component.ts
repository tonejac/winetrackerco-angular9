import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../globals';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-my-wines',
	templateUrl: './my-wines.component.html',
	styleUrls: ['./my-wines.component.css']
})
export class MyWinesComponent implements OnInit {
	
	_navBarContent:any;
	_pastButtonConfig:any;
	_cellarButtonConfig:any;
	_wishlistButtonConfig:any;
	_winesList:any;
	
	constructor(
		private _router:Router,
		private _globals:Globals,
		private _apiService:ApiService
		) { }
	
	ngOnInit(): void {
		
		this._navBarContent = {
			"title": "My Wines",
			"cellarTotal": null
		}
		
		this._pastButtonConfig = {
			"svgIcon": "past",
			"row1Text": "Past Wines",
			"row2Text": "Wines I've already drank",
			"mode": undefined,
			"count": null
		}
		
		this._cellarButtonConfig = {
			"svgIcon": "cellar",
			"row1Text": "My Cellar",
			"row2Text": "Wines I own",
			"mode": undefined,
			"count": null,
			"total": null
		}
		
		this._wishlistButtonConfig = {
			"svgIcon": "wishlist",
			"row1Text": "My Wishlist",
			"row2Text": "Wines I'd like to buy",
			"mode": undefined,
			"count": null
		}
		
		this._apiService.getMyWinesCount({}).subscribe((response:any)=> {
			console.log('getMyWinesCount response:', response);
			this._pastButtonConfig.count = response.past;
			this._cellarButtonConfig.count = response.cellar;
			this._wishlistButtonConfig.count = response.wishlist;
		});
		
		this._apiService.getCellarValue().subscribe((response:any)=> {
			this._cellarButtonConfig.total = response.cellarValue;
			console.log('celar value', response.cellarValue);
		});
		
	}
	
	navigateTo(target:String) {
		if (target == 'pastwines') {
			this._router.navigate(['gallery', 'past', '0']);
		} else if (target == 'cellarwines') {
			this._router.navigate(['gallery', 'cellar', '0']);
		} else if (target == 'wishlistwines') {
			this._router.navigate(['gallery', 'wishlist', '0']);
		}
	}
	
}
