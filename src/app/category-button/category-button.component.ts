import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-category-button',
	templateUrl: './category-button.component.html',
	styleUrls: ['./category-button.component.css']
})
export class CategoryButtonComponent implements OnInit {
	
	@Input() buttonConfig:any;
	
	_svgContent:any;
	_row1Text:any;
	_row2Text:any;
	
	constructor() { }
	
	ngOnInit(): void {
		
	}
	
}
