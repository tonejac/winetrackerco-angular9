import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Globals } from '../../globals';
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
	
	constructor(
		private _globals:Globals
		) { }
	
	ngOnInit(): void {
		setTimeout(()=> {
			this.configureTabs();
		}, 0);
		
		this._globals._touchTagsCategoryChange.subscribe((data)=> {
			// console.log('global _touchTagsCategoryChange data', data);
			this.setTabState(data);
		});
		this._globals._currentTouchTagsCategory = 0;
	}
	
	ngOnDestroy():void {
		this._globals._touchTagsCategoryChange.unsubscribe();
	}
	
	tabClick(index:any) {
		this._globals._currentTouchTagsCategory = index;
		//this.tabClicked.emit(index);
		this._globals._touchTagsCategoryChange.emit(index);
		this.setTabState(index);
	}
	
	setTabState(index:any) {
		this.resetTabStates();
		$(this._tabsArray[index]).addClass('selected');
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
		// console.log('setSelected', selectedTab);
		$('.tab.'+selectedTab).addClass('selected');
	}
	
}
