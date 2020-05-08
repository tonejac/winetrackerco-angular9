import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-choice',
	templateUrl: './login-choice.component.html',
	styleUrls: ['./login-choice.component.css']
})
export class LoginChoiceComponent implements OnInit {
	
	_signinButtonConfig:any;
	_signupButtonConfig:any;
	
	constructor(
		private _router:Router
		) { }
	
	ngOnInit():void {
		this._signinButtonConfig = {
			"value": "Sign In",
			"type": "secondary"
		}
		this._signupButtonConfig = {
			"value": "Sign Up",
			"type": "primary"
		}
	}
	
	buttonClick(view:String):void {
		this._router.navigate([view]);
	}
	
}
