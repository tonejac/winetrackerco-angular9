import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-regular-button',
	templateUrl: './regular-button.component.html',
	styleUrls: ['./regular-button.component.css']
})
export class RegularButtonComponent implements OnInit {
	@Input() buttonConfig:any;
	
	constructor() { }
	
	ngOnInit(): void {
		
	}
	
}
