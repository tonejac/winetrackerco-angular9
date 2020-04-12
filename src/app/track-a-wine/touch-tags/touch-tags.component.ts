import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-touch-tags',
	templateUrl: './touch-tags.component.html',
	styleUrls: ['./touch-tags.component.css']
})
export class TouchTagsComponent implements OnInit {
	
	@Output() _triggerTouchTagsPanel = new EventEmitter();
	_touchTagsButtonConfig:any;
	
	constructor() { }
	
	ngOnInit(): void {
		this._touchTagsButtonConfig = {
			"value": "TouchTag™ the Wine",
			"type": "primary"
		}
	}
	
	openTouchTagsPanel() {
		this._triggerTouchTagsPanel.emit('open');
	}
	
}
