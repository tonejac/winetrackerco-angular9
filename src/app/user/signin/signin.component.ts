import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	
	_navBarContent:any;
	
	constructor() { }
	
	ngOnInit(): void {
		this._navBarContent = {
			"title": "Signin",
			"cellarTotal": null
		}
	}
	
}
