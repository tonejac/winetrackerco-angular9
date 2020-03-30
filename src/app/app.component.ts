import { Component, ViewChild } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	
	@ViewChild(NavMenuComponent, {static: false}) _navMenu:NavMenuComponent;
	
	constructor() {
		
	}
	
	closeIfOpen() {
		if (this._navMenu._menuState == 'open') {
			this._navMenu.menuClick();
		}
	}
}
