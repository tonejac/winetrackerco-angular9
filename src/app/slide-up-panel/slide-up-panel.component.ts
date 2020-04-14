import { Component, OnInit, Input } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-slide-up-panel',
	templateUrl: './slide-up-panel.component.html',
	styleUrls: ['./slide-up-panel.component.css']
})
export class SlideUpPanelComponent implements OnInit {
	
	@Input() tabsConfig:any;
	
	constructor() { }
	
	ngOnInit():void {
		
	}
	
	public open():void {
		$('.bg-cover').css({
			'top': '0'
		}).transition({
			'opacity': 0.75
		}, 400, 'linear');
		
		$('.panel-container').transition({
			'transform': 'translate(-50%, -100%)'
		}, 300, 'easeOutQuad');
		
		$('app-nav-tabs').transition({
			'top': '-25px',
			'delay': 280
		}, 200, 'easeOutQuad');
		
		$(document).on('keyup', (e:any)=> {
			if (e.key == 'Escape') {
				this.close();
			}
		})
	}
	
	public close():void {
		$('.bg-cover').transition({
			'opacity': 0.0
		}, 300, 'linear', ()=> {
			$('.bg-cover').css({
				'top': '100%'
			})
		});
		
		$('.panel-container').transition({
			'transform': 'translate(-50%, 0%)'
		}, 300, 'easeOutQuad');
		
		$('app-nav-tabs').transition({
			'top': '0px'
		}, 300, 'easeOutQuad');
		
		$(document).unbind('keyup');
	}
	
}
