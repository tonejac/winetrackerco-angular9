import { Component, OnInit, Input } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-nav-tabs',
	templateUrl: './nav-tabs.component.html',
	styleUrls: ['./nav-tabs.component.css']
})
export class NavTabsComponent implements OnInit {
	
	@Input() tabsConfig:any;
	
	constructor() { }
	
	ngOnInit(): void {
		setTimeout(()=> {
			this.setSelected(this.tabsConfig.tabsArray[0].view);
		}, 0);
	}
	
	setSelected(selectedTab) {
		console.log('setSelected', selectedTab);
		$('.tab.'+selectedTab).addClass('selected');
	}
	
}
