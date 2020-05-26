import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	_sessionId = window.localStorage.getItem('winetrackerCookie');
	_notificationCount:Number;
	
	constructor(
		private _router:Router
		) { }
	
	ngOnInit(): void {
		this._notificationCount = 3;
	}
	
	navigateToTrackAWine() {
		this._router.navigate(['trackawine']);
	}
	
	navigateToMyWines() {
		if (this._sessionId) {
			
		}
		this._router.navigate(['mywines']);
	}
	
	navigateToSearch() {
		console.log('SEARCH');
	}
	
	navigateToNotifications() {
		console.log('nav to notifications');
	}
	
	navigateToEvents() {
		console.log('nav to events');
	}
	
}
