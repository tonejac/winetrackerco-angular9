import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-nav-menu',
	templateUrl: './nav-menu.component.html',
	styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
	
	public _menuState = 'closed';
	
	constructor() { }
	
	ngOnInit(): void {
	}
	
	public menuClick() {
		if (this._menuState == 'closed') {
			$('app-nav-menu').transition({
				'left': 0
			}, 300, 'easeOutQuad');
			$('.main-container').transition({
				'left': 260
			}, 300, 'easeOutQuad');
			this._menuState = 'open';
		} else if (this._menuState == 'open') {
			$('app-nav-menu').transition({
				'left': -260
			}, 300, 'easeOutQuad');
			$('.main-container').transition({
				'left': 0
			}, 300, 'easeOutQuad');
			this._menuState = 'closed';
		}
	}
	
	navigateBack() {
		console.log('go back');
	}
	
	navigateToHome() {
		console.log('go home');
	}
	
	navigateToTrackAWine() {
		console.log('track a wine');
	}
	
	navigateToMyWines() {
		console.log('my wines');
	}
	
	navigateToSearch() {
		console.log('search');
	}
	
	navigateToEvents() {
		console.log('events');
	}
	
	navigateToMyAccount() {
		console.log('my account');
	}
	
	navigateToAbout() {
		console.log('about');
	}
	
}
