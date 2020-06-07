import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
	selector: 'app-list-view',
	templateUrl: './list-view.component.html',
	styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
	
	@Input() winesConfig:any;
	public _navBarContent:any;
	public _category:any;
	public _listContent:any;
	
	constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		private _globals:Globals
		) { }
	
	ngOnInit(): void {
		this._category = this._route.snapshot.paramMap.get('category');
		
		this._listContent = this.winesConfig;
		console.log('_listContent', this._listContent);
		
		this._navBarContent = {
			"title": this.getTitle(),
			"cellarTotal": null
		}
	}
	
	getTitle() {
		
	}
	
	getFirstPartOfScore(scoreNumber:String):String {
		let wholeNumber = String(scoreNumber).split('.')[0];
		return wholeNumber;
	}
	
	getLastPartOfScore(scoreNumber:String):String {
		let decimal = String(scoreNumber).split('.')[1];
		return decimal;
	}
	
	navigateToGallery(index) {
		this._router.navigate(['gallery', this._category, index]);
	}
	
}
