import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Globals } from '../globals';
declare var $:any;

@Component({
	selector: 'app-category-button',
	templateUrl: './category-button.component.html',
	styleUrls: ['./category-button.component.css']
})
export class CategoryButtonComponent implements OnInit {
	
	@Input() buttonConfig:any;
	@Output() fileAdded = new EventEmitter();
	_mode:String;
	
	constructor(
		private _globals:Globals
		) { }
	
	ngOnInit(): void {
		this._mode = this.buttonConfig.mode;
		// setTimeout(()=> {
		// 	if (this.buttonConfig.mode) {
		// 		$('input').show();
		// 		$('input.'+this._mode).on('change', (e:Event)=> {
		// 			this._globals._photoFile = $(e.target).prop('files')[0];
		// 			this.fileAdded.emit(this._mode);
		// 		});
		// 	}
		// });
	}
	
	fileAddedChange(e:Event):void {
		this._globals._photoFile = $(e.target).prop('files')[0];
		this.fileAdded.emit(this._mode);
	}
	
}
