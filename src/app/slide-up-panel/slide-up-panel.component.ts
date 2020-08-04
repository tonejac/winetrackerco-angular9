import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef, OnDestroy } from '@angular/core';
import { SlideUpPanelDirective } from './slide-up-panel.directive';
import { Globals } from '../globals';
declare var $:any;

@Component({
	selector: 'app-slide-up-panel',
	templateUrl: './slide-up-panel.component.html',
	styleUrls: ['./slide-up-panel.component.css']
})
export class SlideUpPanelComponent implements OnInit {
	
	@Input() tabsConfig:any;
	@Input() contentConfig:any;
	@Input() contentComponent:any;
	@ViewChild(SlideUpPanelDirective) slideUpContent: SlideUpPanelDirective;
	_loadedComponentRef:any;
	_slideUpPanelCategoryChangeSubscriptionObject:any;
	_bottomBarDoneSubscriptionObject:any;
	
	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private _globals:Globals
		) { }
	
	ngOnInit():void {
		setTimeout(()=> {
			this.loadComponent();
		});
		
		this._slideUpPanelCategoryChangeSubscriptionObject = this._globals._slideupPanelCategoryChange.subscribe((data)=> {
			// console.log('global _slideupPanelCategoryChange data', data);
			this.tabClicked(data);
		});
		
		this._bottomBarDoneSubscriptionObject = this._globals._bottomBarDone.subscribe((data)=> {
			this.close();
		})
	}
	
	ngOnDestroy():void {
		if (this._slideUpPanelCategoryChangeSubscriptionObject) {
			this._slideUpPanelCategoryChangeSubscriptionObject.unsubscribe();
		}
		if (this._bottomBarDoneSubscriptionObject) {
			this._bottomBarDoneSubscriptionObject.unsubscribe();
		}
	}
	
	loadComponent() {
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.contentComponent);
		
		if (this.slideUpContent) {
			this.slideUpContent.viewContainerRef.clear();
			this._loadedComponentRef = this.slideUpContent.viewContainerRef.createComponent(componentFactory);
		}
		
	}
	
	tabClicked(val:any) {
		//this._loadedComponentRef.instance.tabClick(val);
		$('.panel-content').scrollTop(0);
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
			'top': '-26px',
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
