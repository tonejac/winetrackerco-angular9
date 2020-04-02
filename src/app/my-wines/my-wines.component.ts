import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-my-wines',
	templateUrl: './my-wines.component.html',
	styleUrls: ['./my-wines.component.css']
})
export class MyWinesComponent implements OnInit {
	
	_pastButtonConfig:any;
	_cellarButtonConfig:any;
	_wishlistButtonConfig:any;
	
	constructor() { }
	
	ngOnInit(): void {
		
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
	
	testClick(e:Event) {
		console.log('e.target', e.target);
	}
	
}
