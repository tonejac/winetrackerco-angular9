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
		) {}
	
	public signin(dataObj:any) {
		let dataObjString = JSON.stringify(dataObj);
		let httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json; charset=utf-8',
				'Accept': 'application/json'
			})
		};
		
		return this._httpClient.post(this._domain + '/auth/signin?sessionId='+this.getSessionId(), dataObjString, httpOptions).pipe(map(
			data => {
				return data;
			},
			error => {
				console.log('Error', error);
				return error;
			}
		))
	}
	
	
	public getSessionId():any {
		var sessionId = window.localStorage.getItem('winetrackerCookie');
		
		if (sessionId) {
			return sessionId;
		} else {
			sessionId = uuid();
			window.localStorage.setItem('winetrackerCookie', sessionId);
			return sessionId;
		}
	}
	
	
	/*
	
	public getBinData(binId) {
		return this.httpClient.get('https://service.stockpilereports.com/fc/getFixedPileData.php?id='+binId);
	}
	
	*/
	
}
