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
	_totalScoreBigPart:Number = null;
	_totalScoreLittlePart:Number = null;
	
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
		console.log('scoreData', scoreData, score);
	}
	
	/*
		
		CalculateScore: function() {
			
			// REAL DATA OBJ
			
			var scoreData = {
						aroma: Number( $("#ReviewAroma").val() ),
						tastetexture: Number( $("#ReviewTasteTexture").val() ),
						aftertaste: Number( $("#ReviewAfterTaste").val() ),
						impression: Number( $("#ReviewImpression").val() )
					};
			
			// ADJUST THE VALUES FOR WEIGHTING
			scoreData.aroma *= 0.195;
			scoreData.tastetexture *= 0.335;
			scoreData.aftertaste *= 0.255;
			scoreData.impression *= 0.215;
			
			var result = {};
			// add raw input
			result.score = scoreData.aroma + scoreData.tastetexture + scoreData.aftertaste + scoreData.impression;
			// multiply by 10 to get 50 to 100 range;
			result.score = result.score *10;
			// add 50 to make range be 50 to 100;
			result.score = result.score + 50;
			// multiply by 10 to do first half of rounding to tenth place decimal;
			result.score = result.score * 10;
			// round to nearest whole number
			result.score = Math.round( result.score );
			// divide by ten to put number back into range with proper decimal point
			result.score = result.score / 10;
			
			$("#big-number").html(result.scoreBigPart);
			$("#smaller-number").html(result.scoreSmallPart);
			$("#ReviewScore").val(result.score);
			
			_totalScore = result.score;
			$("#scoreTotal").val(_totalScore);
			ViewController.PrepForNumberAnimation();
		},
		
		CheckForFinalScore: function() {
			//console.log('values', _aromaValue, _tasteValue, _aftertasteValue, _overallImpressionValue);
			if (
				_aromaValue != null &&
				_tasteValue != null &&
				_aftertasteValue != null &&
				_overallImpressionValue != null
			) {
				if (_firstRunSliders == true) {
					$('.body-container').animate({
						scrollTop: 5000
					}, 'slow', function() {
						_firstRunSliders = false;
						ViewController.CalculateScore();
					});
				} else {
					ViewController.CalculateScore();
				}
			}
		},

		PrepForNumberAnimation: function() {

			var numPartsArray = String(_totalScore).split(".");
			if (numPartsArray[1] == undefined) {
				numPartsArray[1] = "0";
			}

			var bigNumArray = String(numPartsArray[0]).split('');
			var smallNumArray = String(numPartsArray[1]).split('');

			//populate a new array for the big number digits
			var i;
			_bigNumStartValuesArray = [];
			for (i = 0; i < bigNumArray.length; i++) {
				_bigNumStartValuesArray[i] = bigNumArray[i];
			}

			_smallNumStartValuesArray = [];
			for (i = 0; i < smallNumArray.length; i++) {
				_smallNumStartValuesArray[i] = smallNumArray[i];
			}

			for (i = 0; i < _bigNumStartValuesArray.length; i++) {
				_bigNumStartValuesArray[i] -= 10;
			}
			for (i = 0; i < _smallNumStartValuesArray.length; i++) {
				_smallNumStartValuesArray[i] -= 10;
			}

			_numberFlipCounter = 0;

			ViewController.NumberCycler();
		},

		NumberCycler: function() {
			setTimeout("ViewController.UpdateNumberDisplay()", 30);
		},

		UpdateNumberDisplay: function() {

			var displayValuesBig = '';
			var displayValuesSmall = '';
			var i;
			
			if (_numberFlipCounter < 10) {
				for (i = 0; i < _bigNumStartValuesArray.length; i++) {
					_bigNumStartValuesArray[i]++;
					displayValuesBig += String(Math.abs(_bigNumStartValuesArray[i]));
				}
				$("#big-number").html(displayValuesBig);
				for (i = 0; i < _smallNumStartValuesArray.length; i++) {
					_smallNumStartValuesArray[i]++;
					displayValuesSmall += String(Math.abs(_smallNumStartValuesArray[i]));
				}
				$("#smaller-number").html("." + displayValuesSmall);
				_numberFlipCounter++;
				ViewController.NumberCycler();
			}

		},
	*/
	
	
}
