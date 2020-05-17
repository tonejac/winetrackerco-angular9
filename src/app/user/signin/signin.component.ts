import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
declare var $:any;

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	
	_navBarContent:any;
	_signinButtonConfig:any;
	_showHide:String = 'hide';
	
	constructor(
		private _apiService:ApiService
		) { }
	
	ngOnInit(): void {
		this._navBarContent = {
			"title": "Signin",
			"cellarTotal": null
		}
		
		this._signinButtonConfig = {
			"value": "Sign In",
			"type": "primary"
		}
	}
	
	signin() {
		this._apiService.signin({
			"username": $('#username').val(),
			"password": $('#password').val()
		}).subscribe((response:any)=> {
			console.log('SIGNIN response', response);
		})
	}
	
	forgot() {
		console.log('FORGOT');
	}
	
	showHidePassword() {
		if (this._showHide == 'hide') {
			$('#password').attr('type', 'text');
			$('.show-hide-button').text('HIDE');
			this._showHide = 'show';
		} else if (this._showHide == 'show') {
			$('#password').attr('type', 'password');
			$('.show-hide-button').text('SHOW');
			this._showHide = 'hide';
		}
	}
	
}
