import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Globals } from "./globals";
import { ApiService } from './api.service';

@Injectable()
export class ApiResolver implements Resolve<any> {
	
	_category:String;
	
	constructor(
		private _apiService:ApiService,
		private _route:ActivatedRoute,
		private _globals:Globals
	) {
		
	}
	
	resolve(route: ActivatedRouteSnapshot) {
		const method = route.data['resolveMethod'];
		this._category = route.data['category'];
		return this[method]();
	}
	
	
	getMyWinesData() {
		if (this._category == 'past') {
			return this._apiService.getMyWines('past');
		} else if (this._category == 'cellar') {
			return this._apiService.getMyWines('cellar');
		} else if (this._category == 'wishlist') {
			return this._apiService.getMyWines('wishlist');
		}
	}
	
	
}

