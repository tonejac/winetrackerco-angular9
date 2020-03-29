import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nav-menu',
	templateUrl: './nav-menu.component.html',
	styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
	
	constructor() { }
	
	ngOnInit(): void {
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
