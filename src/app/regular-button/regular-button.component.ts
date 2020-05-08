import { Component, OnInit, Input } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-regular-button',
	templateUrl: './regular-button.component.html',
	styleUrls: ['./regular-button.component.css']
})
export class RegularButtonComponent implements OnInit {
	
	@Input() buttonConfig:any;
	_buttonLabel:String;
	
	constructor() { }
	
	ngOnInit(): void {
		this._buttonLabel = this.buttonConfig.value;
	}
	
	public changeLabel(val:String) {
		this._buttonLabel = val;
	}
	
}
