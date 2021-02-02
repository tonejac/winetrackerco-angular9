import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Globals } from '../globals';
declare var $:any;

@Component({
	selector: 'app-confirmation-message',
	templateUrl: './confirmation-message.component.html',
	styleUrls: ['./confirmation-message.component.css']
})
export class ConfirmationMessageComponent implements OnInit, OnDestroy {
	
	@Input() messageConfig:any;
	_okayButtonConfig:any;
	_title:String;
	_message:String;
	
	constructor(
		private _globals:Globals
		) { }
	
	ngOnInit(): void {
		this._okayButtonConfig = {
			"value": "Okay",
			"type": "primary"
		}
		
		this._globals._confirmationUpdate.subscribe(()=> {
			this._title = this._globals._confirmationTitle;
			this._message = this._globals._confirmationMessage;
			$('app-confirmation-message').show();
		});
		
		$(document).on('keyup', (e)=> {
			if (e.key == 'Escape') {
				this.buttonClick();
			}
		});
	}
	
	ngOnDestroy(): void {
		$(document).unbind('keyup');
	}
	
	buttonClick():void {
		console.log('confirmation message OK click');
		$('app-confirmation-message').hide();
	}
	
}
