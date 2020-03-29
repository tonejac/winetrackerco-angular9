import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	_notificationCount:Number;
	
	constructor(
		private _router:Router
		) { }
	
	ngOnInit(): void {
		this._notificationCount = 3;
	}
	
	navigateToMyWines() {
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
