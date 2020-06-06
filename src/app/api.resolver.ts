import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Globals } from "./globals";
import { ApiService } from './api.service';

@Injectable()
export class ApiResolver implements Resolve<any> {
	
	
	
	constructor(
		private _apiService:ApiService,
		private _route:ActivatedRoute,
		private _globals:Globals
	) {
		
	}
	
	resolve(route: ActivatedRouteSnapshot) {
		const method = route.data['resolveMethod'];
		return this[method]();
	}
	
	
	getMyWinesData() {
		return this._apiService.getMyWines('past');
	}
	
	
}

