import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-track-a-wine',
	templateUrl: './track-a-wine.component.html',
	styleUrls: ['./track-a-wine.component.css']
})
export class TrackAWineComponent implements OnInit {
	
	_navBarContent:Object;
	_trackAWineButtonConfig:any;
	_addToCellarButtonConfig:any;
	_addToWishlistButtonConfig:any;
	
	constructor() { }
	
	ngOnInit(): void {
		this._navBarContent = {
			"title": "Track a Wine",
			"cellarTotal": null
		}
		
		this._trackAWineButtonConfig = {
			"svgIcon": "drinkitnow",
			"row1Text": "Drink it Now",
			"row2Text": "Add a score to remember whether you liked it or not."
		}
		
		this._addToCellarButtonConfig = {
			"svgIcon": "cellar",
			"row1Text": "Add to My Cellar",
			"row2Text": "I own it but I'm not going to drink it right now."
		}
		
		this._addToWishlistButtonConfig = {
			"svgIcon": "wishlist",
			"row1Text": "Add to My Wishlist",
			"row2Text": "I want to remember this so I can buy it in the future."
		}
		
	} 
	
}
