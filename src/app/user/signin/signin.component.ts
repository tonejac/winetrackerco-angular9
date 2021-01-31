import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { User } from '../../user';
import { Globals } from '../../globals';
declare var $:any;
declare var window:any;

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
		private _router:Router,
		private _authService:AuthService,
		private _globals:Globals
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
		
		$('#username, #password').on('keypress', (e)=> {
			if(e.which == 13) {
				this.signin();
			}
		});
	}
	
	signin() {
		let userObj:User = {
			"username": $('#username').val(),
			"password": $('#password').val()
		}
		
		if (userObj.username == '' || userObj.password == '') {
			alert('Make sure to enter both your username and password.');
			return false;
		}
		
		this._authService.signin(userObj).subscribe((response:any)=> {
			console.log('SIGNIN response', response);
			
			if (this._globals._destinationRoute) {
				this._router.navigateByUrl(this._globals._destinationRoute);
			} else {
				this._router.navigateByUrl('/');
			}
			
			// mixpanel.identify(response.username);
			// mixpanel.people.set({
			// 	'$username': response.username,
			// 	'$membersince': response.created,
			// 	'$firstname': response.firstName,
			// 	'$email': response.email,
			// 	'$id': response._id,
			// 	'$lastlogin': new Date()
			// });
			//mixpanel.track('signin-manual');
			
			var confirmationMessage = '';
			confirmationMessage += '<strong>Hello!</strong>';
			confirmationMessage += '<br>';
			confirmationMessage += '<br>';
			confirmationMessage += 'Welcome back ' + response.username + ', you are now logged in.'
			confirmationMessage += '<br>';
			confirmationMessage += '<br>';
			confirmationMessage += '<button id="okay-button" class="btn">Okay</div>';
			
			this._globals._confirmationTitle = 'Hello!';
			this._globals._confirmationMessage = 'Welcome back ' + response.username + ', you are now logged in.';
			this._globals._confirmationUpdate.emit();
			
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
