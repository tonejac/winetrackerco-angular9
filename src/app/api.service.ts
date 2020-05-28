import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	
	_domain = 'http://54.144.195.181:8080';
	
	constructor(
		private _httpClient:HttpClient,
		) {
			
	}
	
	getHeaders():any {
		let options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json; charset=utf-8',
				'Accept': 'application/json',
				'Authorization': 'Bearer '+localStorage.getItem('winetrackerCookie')
			})
		}
		return options;
	}
	
	public getMyWinesCount(dataObj:any) {
		let dataObjString = JSON.stringify(dataObj);
		
		return this._httpClient.post(this._domain + '/api/wines/user/count', dataObjString, this.getHeaders()).pipe(map(
			data => {
				return data;
			},
			error => {
				console.log('Error', error);
				return error;
			}
		))
	}
	
	public getCellarValue() {
		// JWT from 'winetrackerCookie' will determine the userid
		return this._httpClient.post(this._domain + '/api/wines/cellar/value', {"mode": "cellar"}, this.getHeaders()).pipe(map(
			data => {
				return data;
			},
			error => {
				console.log('Error', error);
				return error;
			}
		));
	}
	
	
	/*
	
	public getBinData(binId) {
		return this.httpClient.get('https://service.stockpilereports.com/fc/getFixedPileData.php?id='+binId);
	}
	
	*/
	
}
