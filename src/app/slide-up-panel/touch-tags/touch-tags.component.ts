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
	
	constructor() { }
	
	ngOnInit(): void {
		console.log('visual json', this._visualContent.content);
		
		setTimeout(()=> {
			this.configureUi();
		}, 0);
	}
	
	configureUi() {
		$('.tag').on('click', function() {
			$(this).addClass('selected');
		});
	}
	
}
