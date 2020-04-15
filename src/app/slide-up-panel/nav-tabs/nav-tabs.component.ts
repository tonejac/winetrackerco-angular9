import { Component, OnInit, Input } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-nav-tabs',
	templateUrl: './nav-tabs.component.html',
	styleUrls: ['./nav-tabs.component.css']
})
export class NavTabsComponent implements OnInit {
	
	@Input() tabsConfig:any;
	_tabsArray:any;
	
	constructor() { }
	
	ngOnInit(): void {
		setTimeout(()=> {
			this.configureTabs();
		}, 0);
		
		
	}
	
	configureTabs() {
		this.setSelected(this.tabsConfig.tabsArray[0].view);
		this._tabsArray = $.find('.tab');
		console.log('tabsArray', this._tabsArray);
		$('.tab').on('click', (e:any)=> {
			this.resetTabStates();
			$(e.target).addClass('selected');
		});
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
