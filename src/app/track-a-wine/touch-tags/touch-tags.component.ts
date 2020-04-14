import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { SlideUpPanelComponent } from '../../slide-up-panel/slide-up-panel.component';

@Component({
	selector: 'app-touch-tags',
	templateUrl: './touch-tags.component.html',
	styleUrls: ['./touch-tags.component.css']
})
export class TouchTagsComponent implements OnInit {
	
	@Output() _triggerTouchTagsPanel = new EventEmitter();
	@ViewChild(SlideUpPanelComponent, {static:false}) _slideUpPanel:SlideUpPanelComponent;
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
