import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild } from '@angular/core';
import { RegularButtonComponent } from '../../regular-button/regular-button.component';
import { Globals } from '../../globals';
import touchTagsJson from '../../../assets/touchtags.json';
declare var $:any;

@Component({
	selector: 'app-touch-tags',
	templateUrl: './touch-tags.component.html',
	styleUrls: ['./touch-tags.component.css']
})
export class TouchTagsComponent implements OnInit {
	
	@ViewChild(RegularButtonComponent, {static:true}) _bottomBarButton: RegularButtonComponent;
	// @Output() _bottomBarDoneButtonClick = new EventEmitter();
	
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
	_buttonBottomBar:any = {
		"value": "Next",
		"type": "primary mini"
	}
	
	constructor(
		private _globals:Globals
		) { }
	
	ngOnInit(): void {
		this._globals._touchTagsCategoryChange.subscribe((data)=> {
			console.log('touch-tags context data num', data);
			this._globals._currentTouchTagsCategory = data;
			this._currentCategory = this._globals._currentTouchTagsCategory;
			if (this._globals._currentTouchTagsCategory == 4) {
				this._bottomBarButton.changeLabel('Done');
			} else {
				this._bottomBarButton.changeLabel('Next');
			}
		})
	}
	
	ngOnDestroy():void {
		this._globals._touchTagsCategoryChange.unsubscribe();
	}
	
	nextTouchTagCategory() {
		if (this._globals._currentTouchTagsCategory < 4) {
			this._globals._currentTouchTagsCategory++;
			this._currentCategory = this._globals._currentTouchTagsCategory;
			this._globals._touchTagsCategoryChange.emit(this._currentCategory);
		} else {
			this._globals._bottomBarDone.emit('done');
		}
	}
	
}
