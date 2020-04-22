import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-nav-tabs',
	templateUrl: './nav-tabs.component.html',
	styleUrls: ['./nav-tabs.component.css']
})
export class NavTabsComponent implements OnInit {
	
	@Input() tabsConfig:any;
	@Output() tabClicked = new EventEmitter();
	_tabsArray:any;
	
	constructor() { }
	
	ngOnInit(): void {
		setTimeout(()=> {
			this.configureTabs();
		}, 0);
	}
	
	tabClick(e:Event, index:Number) {
		// console.log('tabClick', index);
		this.resetTabStates();
		$(e.target).addClass('selected');
		this.tabClicked.emit(index);
	}
	
	configureTabs() {
		//this.setSelected(this.tabsConfig.tabsArray[0].view);
		this._tabsArray = $.find('.tab');
		$(this._tabsArray[0]).trigger('click');
	}
	
	resetTabStates() {
		for (let i=0; i<this._tabsArray.length; i++) {
			$(this._tabsArray[i]).removeClass('selected');
		}
	}
	
	setSelected(selectedTab) {
		console.log('setSelected', selectedTab);
		$('.tab.'+selectedTab).addClass('selected');
	}
	
}
