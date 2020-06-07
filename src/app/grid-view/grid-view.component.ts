import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
	selector: 'app-grid-view',
	templateUrl: './grid-view.component.html',
	styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
	
	@Input() winesConfig:any;
	public _navBarContent:any;
	public _category:any;
	public _gridContent:any;
	
	constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		private _globals:Globals
		) { }
	
	ngOnInit(): void {
		this._category = this._route.snapshot.paramMap.get('category');
		
		this._gridContent = this.winesConfig;
		console.log('_gridContent', this._gridContent);
		
		this._navBarContent = {
			"title": this.getTitle(),
			"cellarTotal": null
		}
		
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
	
	navigateToGallery(index) {
		this._router.navigate(['mywines', 'past', 'gallery', index]);
	}
	
}
