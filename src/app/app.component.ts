import { Component, ViewChild, OnInit } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	
	@ViewChild(NavMenuComponent, {static: false}) _navMenu:NavMenuComponent;
	_messageConfig:any;
	
	constructor() {
		
	}
	
	ngOnInit():void {
		this._messageConfig = {
			"title": "I Am the Title of the Message",
			"message": "Here is the confirmation message to display here."
		}
	}
	
	closeIfOpen():void {
		if (this._navMenu._menuState == 'open') {
			this._navMenu.menuClick();
		}
	}
}
