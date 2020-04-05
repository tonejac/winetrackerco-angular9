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
		
		this._winesList = [
			{
				"image": "https://winetrackerco.imgix.net/900bf4c10ce9b0879a1fdb1c7cd30158?w=&h=1024",
				"thumbnail": "https://winetrackerco.imgix.net/900bf4c10ce9b0879a1fdb1c7cd30158?w=128&h=128&fit=crop",
				"title": "One"
			},
			{
				"image": "https://winetrackerco.imgix.net/1d5187c0ad4d95548213b03810058cbf?w=&h=1024",
				"thumbnail": "https://winetrackerco.imgix.net/1d5187c0ad4d95548213b03810058cbf?w=128&h=128&fit=crop",
				"title": "Two"
			},
			{
				"image": "https://winetrackerco.imgix.net/4d6d4c42bc5218d64fb134f4a8eb9f5f?w=&h=1024",
				"thumbnail": "https://winetrackerco.imgix.net/4d6d4c42bc5218d64fb134f4a8eb9f5f?w=128&h=128&fit=crop",
				"title": "Three"
			},
			{
				"image": "https://winetrackerco.imgix.net/859a4f1cf65ec4ab73d7535989a82b1a?w=&h=1024",
				"thumbnail": "https://winetrackerco.imgix.net/859a4f1cf65ec4ab73d7535989a82b1a?w=128&h=128&fit=crop",
				"title": "Four"
			}
		];
		
	}
	
	navigateTo(target:String) {
		if (target == 'pastwines') {
			
			this._globals._currentWinesList = this._winesList;
			this._router.navigate(['gallery', 'past']);
			
		} else if (target == 'cellarwines') {
			
			this._globals._currentWinesList = this._winesList;
			this._router.navigate(['gallery', 'cellar']);
			
		} else if (target == 'wishlistwines') {
			
			this._globals._currentWinesList = this._winesList;
			this._router.navigate(['gallery', 'wishlist']);
			
		}
	}
	
}
