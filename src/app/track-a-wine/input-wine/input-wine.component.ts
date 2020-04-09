import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any;

@Component({
	selector: 'app-input-wine',
	templateUrl: './input-wine.component.html',
	styleUrls: ['./input-wine.component.css']
})
export class InputWineComponent implements OnInit {
	
	_navBarContent:Object;
	_instructions:String;
	_mode:String
	_firstSlide:Boolean = true;
	_aromaScore:String = '0 to 5';
	_happinessLevel:Number = 0.0;
	
	constructor(
		private _route:ActivatedRoute
		) { }
	
	ngOnInit(): void {
		let mode = this._route.snapshot.paramMap.get('mode');
		this._mode = mode;
		let titleFromMode:String;
		
		if (mode == 'drinkitnow') {
			titleFromMode = 'Drink it Now';
			this._instructions = 'Use the sliders to give your personal opinion of the wine';
		} else if (mode == 'addtocellar') {
			titleFromMode = 'Add to Cellar';
			this._instructions = 'Use the sliders to give your personal opinion of the wine';
		} else if (mode == 'addtowishlist') {
			titleFromMode = 'Add to Wishlist';
			this._instructions = 'Use the sliders to give your personal opinion of the wine';
		}
		
		this._navBarContent = {
			"title": titleFromMode,
			"cellarTotal": null
		}
		
	}
	
	trackInput(e:Event, type:String) {
		//console.log(type, $(e.target).val());
		
		if (this._firstSlide == true) {
			$('.'+type+'-score').hide();
			$('#tooltip-for-slider').show();
			this._firstSlide = false;
		}
		this._happinessLevel = $(e.target).val();
		if (type == 'aroma') {
			this._aromaScore = Number( $(e.target).val() ).toFixed(1).toString();
		}
	}
	
	slideDone(e:Event, type:String) {
		$('.'+type+'-score').show();
		$('#tooltip-for-slider').hide();
		this._firstSlide = true;
	}
	
	
	
}
