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
	_aromaScore:any = null;
	_tasteScore:any = null;
	_finishScore:any = null;
	_overallScore:any = null;
	_happinessLevel:Number = 0.0;
	_totalScore:Number = null;
	_totalScoreBigPart:any = null;
	_totalScoreLittlePart:any = null;
	_quantity:Number = 1;
	_cancelButtonConfig:any;
	_saveButtonConfig:any;
	_bigNumStartValuesArray:any;
	_smallNumStartValuesArray:any;
	_numberFlipCounter:any;
	
	constructor(
		private _route:ActivatedRoute
		) { }
	
	ngOnInit(): void {
		this._cancelButtonConfig = {
			"value": "Cancel",
			"type": "secondary"
		}
		
		this._saveButtonConfig = {
			"value": "Save",
			"type": "primary"
		}
		
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
		
		// HACK TO DETECT OF USER SETS SLIDER VALUE TO '0', forcing the Slider to still trigger a 'done' event.
		$(document).on('mouseup touchend', (e:Event)=> {
			if ( $(e.target).attr('class') == 'slider' &&  $(e.target).val() == 0) {
				let type = $(e.target).attr('id').split('-')[0];
				this.slideDone(e, type);
			}
		});
		
	}
	
	trackInput(e:Event, type:String) {
		//console.log(type, $(e.target).val());
		
		if (this._firstSlide == true) {
			$('.'+type+'-score').hide();
			$('#tooltip-for-slider').css({
				'display': 'flex',
				'top': $('#'+type+'-slider').position().top - 54
			});
			this._firstSlide = false;
		}
		
		this._happinessLevel = $(e.target).val();
		
		if (type == 'aroma') {
			this._aromaScore = Number( $(e.target).val() ).toFixed(1).toString();
		} else if (type == 'taste') {
			this._tasteScore = Number( $(e.target).val() ).toFixed(1).toString();
		} else if (type == 'finish') {
			this._finishScore = Number( $(e.target).val() ).toFixed(1).toString();
		} else if (type == 'overall') {
			this._overallScore = Number( $(e.target).val() ).toFixed(1).toString();
		}
		
		$('#tooltip-for-slider').css({
			'left': this.getSliderPosition(type) + 34 // to compensate for padding offset on left
		});
		
	}
	
	slideDone(e:Event, type:String) {
		$('.'+type+'-score').show();
		$('#tooltip-for-slider').hide();
		this._firstSlide = true; // NEED 4 VARS FOR SLIDE FLAG
		$('.slider-checkmark.'+type).show();
		this.checkForFinalScore();
	}
	
	getSliderPosition(type) {
		let range = $('#'+type+'-slider').width() - 46; // 64px to compensate for padding on slider and sliders container
		let val = $('#'+type+'-slider').val();
		let x = range * val / 5.0;
		return x;
	}
	
	checkForFinalScore() {
		if (
			this._aromaScore != null &&
			this._tasteScore != null &&
			this._finishScore != null &&
			this._overallScore != null
		) {
			this.calculateScore();
		}
	}
	
	calculateScore() {
		let scoreData = {
			"aroma": Number( $('#aroma-slider').val() ),
			"taste": Number( $('#taste-slider').val() ),
			"finish": Number( $('#finish-slider').val() ),
			"overall": Number( $('#overall-slider').val() )
		}
		
		// ADJUST THE VALUES FOR WEIGHTING
		scoreData.aroma *= 0.195;
		scoreData.taste *= 0.335;
		scoreData.finish *= 0.255;
		scoreData.overall *= 0.215;
		
		let score:any = scoreData.aroma + scoreData.taste + scoreData.finish + scoreData.overall;
		score = score * 10 + 50;
		score = score.toFixed(1);
		this._totalScore = score;
		this.prepForNumberAnimation();
	}
	
	prepForNumberAnimation() {
		let numPartsArray = String(this._totalScore).split(".");
		// if (numPartsArray[1] == undefined) {
		// 	numPartsArray[1] = "0";
		// }

		let bigNumArray = String(numPartsArray[0]).split('');
		let smallNumArray = String(numPartsArray[1]).split('');
		console.log(bigNumArray, smallNumArray);
		
		//populate a new array for the big number digits
		let i;
		
		this._bigNumStartValuesArray = [];
		for (i = 0; i < bigNumArray.length; i++) {
			this._bigNumStartValuesArray[i] = bigNumArray[i];
		}

		this._smallNumStartValuesArray = [];
		for (i = 0; i < smallNumArray.length; i++) {
			this._smallNumStartValuesArray[i] = smallNumArray[i];
		}

		for (i = 0; i < this._bigNumStartValuesArray.length; i++) {
			this._bigNumStartValuesArray[i] -= 10;
		}
		
		for (i = 0; i < this._smallNumStartValuesArray.length; i++) {
			this._smallNumStartValuesArray[i] -= 10;
		}

		this._numberFlipCounter = 0;
		
		this.numberCycler();
	}
	
	numberCycler() {
		setTimeout(()=> {
			this.updateNumberDisplay();
		}, 30);
	}
	
	updateNumberDisplay() {
		let displayValuesBig = '';
		let displayValuesSmall = '';
		var i;
		
		if (this._numberFlipCounter < 10) {
			for (i = 0; i < this._bigNumStartValuesArray.length; i++) {
				this._bigNumStartValuesArray[i]++;
				displayValuesBig += Math.abs(this._bigNumStartValuesArray[i]);
			}
			this._totalScoreBigPart = displayValuesBig;
			for (i = 0; i < this._smallNumStartValuesArray.length; i++) {
				this._smallNumStartValuesArray[i]++;
				displayValuesSmall += Math.abs(this._smallNumStartValuesArray[i]);
			}
			this._totalScoreLittlePart = displayValuesSmall;
			this._numberFlipCounter++;
			this.numberCycler();
		}
	}
	
}
