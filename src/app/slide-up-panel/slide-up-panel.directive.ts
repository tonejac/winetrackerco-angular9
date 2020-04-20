import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[slide-up-content]'
})
export class SlideUpPanelDirective {
	
	constructor(
		public viewContainerRef: ViewContainerRef
		) {
			
		}
	
}
