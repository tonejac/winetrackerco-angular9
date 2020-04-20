import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { SlideUpDirective } from './slide-up-directive';

@Component({
	selector: 'app-slide-up-content',
	templateUrl: './slide-up-content.component.html',
	styleUrls: ['./slide-up-content.component.css']
})
export class SlideUpContentComponent implements OnInit {
	
	@Input() content:any;
	@ViewChild(SlideUpDirective, {static:true}) slideUpHost:SlideUpDirective;
	
	constructor(
		private componentFactoryResolver: ComponentFactoryResolver
		) { }
	
	ngOnInit(): void {
		this.loadComponents();
	}
	
	loadComponents() {
		// const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.slideUpHost.component);
		
		// const viewContainerRef = this.content.viewContainerRef;
		// viewContainerRef.clear();
		
		// const componentRef = viewContainerRef.createComponent(componentFactory);
		// (<AdComponent>componentRef.instance).data = adItem.data;
	}
	
}
