import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import touchTagsJson from '../../../assets/touchtags.json';
declare var $:any;

@Component({
	selector: 'app-touch-tags',
	templateUrl: './touch-tags.component.html',
	styleUrls: ['./touch-tags.component.css']
})
export class TouchTagsComponent implements OnInit {
	
	_jsonContent:any = touchTagsJson.touchTags;
	_visualContent:any = {
		"instruction": "Tap the Visual tags you can detect:",
		"content": this._jsonContent[0].visual
	}
	_aromaContent:any = {
		"instruction": "Tap the Aroma tags you can detect:",
		"content": this._jsonContent[1].aroma
	}
	_tasteContent:any = {
		"instruction": "Tap the Taste tags you can detect:",
		"content": this._jsonContent[2].taste
	}
	_finishContent:any = {
		"instruction": "Tap the Finish tags you can detect:",
		"content": this._jsonContent[3].finish
	}
	_overallContent:any = {
		"instruction": "Tap the Overall tags you can detect:",
		"content": this._jsonContent[4].overall
	}
	
	_currentCategory:any = 0;
	
	constructor() { }
	
	ngOnInit(): void {
		
	}
	
	public tabClick(index:Number) {
		this._currentCategory = index;
	}
	
}
