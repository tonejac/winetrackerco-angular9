import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
	selector: 'app-nav-menu',
	templateUrl: './nav-menu.component.html',
	styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
	
	public _menuState = 'closed';
	
	constructor(
		private _router:Router
		) { }
	
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
		this.menuClick();
		this._router.navigate(['/']);
	}
	
	navigateToTrackAWine() {
		this.menuClick();
		this._router.navigate(['trackawine']);
	}
	
	navigateToMyWines() {
		this.menuClick();
		this._router.navigate(['mywines']);
	}
	
	navigateToSearch() {
		console.log('search');
	}
	
	navigateToEvents() {
		console.log('events');
	}
	
	navigateToMyAccount() {
		this.menuClick();
		this._router.navigate(['user', 'login-choice']);
	}
	
	navigateToAbout() {
		console.log('about');
	}
	
}
