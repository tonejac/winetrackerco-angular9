import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
	
	_title:String;
	
	constructor() { }
	
	ngOnInit(): void {
		
	}
	
	public setTitle(dataObj) {
		this._title = dataObj.title;
	}
}
