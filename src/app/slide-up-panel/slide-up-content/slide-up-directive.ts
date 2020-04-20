import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[slide-up-content]'
})
export class SlideUpDirective {
	
	constructor(
		public viewContainerRef: ViewContainerRef
		) {
			
		}
	
}
