import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Globals } from './globals';


@Injectable({
	providedIn: 'root'
})

export class AuthGuard implements CanActivate {
	
	constructor(
		private _router:Router,
		private _authService:AuthService,
		private _globals:Globals
		) {}
	
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		
		if (this._authService.isLoggedIn()) {
			return true;
		} else {
			this._globals._destinationRoute = state.url;
			this._router.navigateByUrl('/user/login-choice');
			return true;
		}
		
	}
	
}
