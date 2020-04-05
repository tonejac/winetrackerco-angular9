import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../globals';

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
		private _globals:Globals
		) { }
	
	ngOnInit(): void {
		
		this._navBarContent = {
			"title": "My Wines",
			"cellarTotal": null
		}
		
		this._pastButtonConfig = {
			"svgIcon": "past",
			"row1Text": "Past Wines",
			"row2Text": "Wines I've already drank"
		}
		
		this._cellarButtonConfig = {
			"svgIcon": "cellar",
			"row1Text": "My Cellar",
			"row2Text": "Wines I own, valued at $nnn"
		}
		
		this._wishlistButtonConfig = {
			"svgIcon": "wishlist",
			"row1Text": "My Wishlist",
			"row2Text": "Wines I'd like to buy"
		}
		
	}
	
	navigateTo(target:String) {
		if (target == 'pastwines') {
			this._router.navigate(['gallery', 'past']);
		} else if (target == 'cellarwines') {
			this._router.navigate(['gallery', 'cellar']);
		} else if (target == 'wishlistwines') {
			this._router.navigate(['gallery', 'wishlist']);
		}
	}
	
}
