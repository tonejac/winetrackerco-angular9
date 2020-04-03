import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
	
	constructor(
		private _router:Router
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
			this._router.navigate(['pastwines', 'gallery']);
		} else if (target == 'cellarwines') {
			console.log('cellar wines gallery');
		} else if (target == 'wishlistwines') {
			console.log('wishlist wines gallery');
		}
	}
	
}
