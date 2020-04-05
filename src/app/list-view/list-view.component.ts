import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../globals';

@Component({
	selector: 'app-list-view',
	templateUrl: './list-view.component.html',
	styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
	
	public _navBarContent:any;
	public _category:any;
	public _listContent:any;
	
	constructor(
		private _route:ActivatedRoute,
		private _globals:Globals
		) { }
	
	ngOnInit(): void {
		this._category = this._route.snapshot.paramMap.get('category');
		
		this._listContent = this._globals._currentWinesList;
		
		this._navBarContent = {
			"title": this.getTitle(),
			"cellarTotal": null
		}
	}
	
	getTitle() {
		
	}
	
}
