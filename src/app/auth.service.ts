import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
	providedIn: 'root'
})

export class AuthService {
	
	_domain = 'http://54.144.195.181:8080';
	
	constructor(
		private _httpClient:HttpClient,
		) { }
	
	
	public signin(dataObj:User) {
		let dataObjString = JSON.stringify(dataObj);
		let httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json; charset=utf-8',
				'Accept': 'application/json'
			})
		};
		
		return this._httpClient.post(this._domain + '/auth/signin-jwt', dataObjString, httpOptions).pipe(map(
			data => {
				localStorage.setItem('winetrackerCookie', String(data));
				return data;
			},
			error => {
				console.log('Error', error);
				return error;
			}
		))
	}
	
	public isLoggedIn(){
		return localStorage.getItem('winetrackerCookie') !== null;
	}
	public logout(){
		localStorage.removeItem('winetrackerCookie');
	}
}
