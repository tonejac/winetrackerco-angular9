import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../../../globals';

@Component({
	selector: 'app-my-wine-details',
	templateUrl: './my-wine-details.component.html',
	styleUrls: ['./my-wine-details.component.css']
})

export class MyWineDetailsComponent implements OnInit {
	
	_index:any;
	_currentWine:any;
	_aromaBarWidth:Number;
	_tasteBarWidth:Number;
	_finishBarWidth:Number;
	_overallBarWidth:Number;
	
	constructor(
		private _globals:Globals,
		private _route:ActivatedRoute
	) { }
	
	ngOnInit(): void {
		this._index = this._route.snapshot.paramMap.get('index');
		this._currentWine = this._globals._currentWinesList[this._index];
		console.log('currentWineData', this._currentWine);
		this._globals._currentWineChange.subscribe(()=> {
			this._currentWine = this._globals._currentWine;
		});
		
		this.calculateBarWidths();
	}
	
	calculateBarWidths():void {
		this._aromaBarWidth = 76 * (this._currentWine['scoreAroma'] / 5.0);
		this._tasteBarWidth = 76 * (this._currentWine['scoreTaste'] / 5.0);
		this._finishBarWidth = 76 * (this._currentWine['scoreFinish'] / 5.0);
		this._overallBarWidth = 76 * (this._currentWine['scoreOverallImpression'] / 5.0);
	}
	
	getFirstPartOfScore(scoreNumber:String):String {
		if (scoreNumber == '0' || scoreNumber == null) {
			return '--';
		}
		let wholeNumber = String(scoreNumber).split('.')[0];
		return wholeNumber;
	}
	
	getLastPartOfScore(scoreNumber:String):String {
		if (scoreNumber == '0' || scoreNumber == null) {
			return '-';
		}
		let decimal = String(scoreNumber).split('.')[1];
		if (decimal == undefined) {
			decimal = '0';
		}
		return decimal;
	}
}
