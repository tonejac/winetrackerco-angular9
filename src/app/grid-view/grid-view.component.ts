import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
	selector: 'app-grid-view',
	templateUrl: './grid-view.component.html',
	styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
	
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
		
		this._gridContent = this._globals._currentWinesList;
		
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
	
	navigateToGallery(index) {
		this._router.navigate(['gallery', 'past', index]);
	}
	
}
