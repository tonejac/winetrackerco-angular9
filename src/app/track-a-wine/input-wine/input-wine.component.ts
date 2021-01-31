import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SlideUpPanelComponent } from '../../slide-up-panel/slide-up-panel.component';
import { TouchTagsComponent } from '../../slide-up-panel/touch-tags/touch-tags.component';
import { WineDetailsComponent } from '../../slide-up-panel/wine-details/wine-details.component';
import { ApiService } from '../../api.service';
import { Globals } from '../../globals';
declare var $:any;

@Component({
	selector: 'app-input-wine',
	templateUrl: './input-wine.component.html',
	styleUrls: ['./input-wine.component.css']
})
export class InputWineComponent implements OnInit {
	
	@ViewChild(SlideUpPanelComponent, {static:false}) _slideUpPanel:SlideUpPanelComponent;
	_navBarContent:Object;
	_instructions:String;
	_notesPlaceholder:String;
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
	_tabsConfig:any;
	
	_touchTagsButtonConfig:any;
	_contentComponent:any;
	
	constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		private _location:Location,
		private _apiService:ApiService,
		private _globals:Globals
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
		
		this._touchTagsButtonConfig = {
			"value": "TouchTag™ the Wine",
			"type": "primary"
		}
		
		let mode = this._route.snapshot.paramMap.get('mode');
		this._mode = mode;
		let titleFromMode:String;
		
		if (mode == 'drinkitnow') {
			titleFromMode = 'Drink it Now';
			this._instructions = 'Use the sliders to give your personal opinion of the wine';
			this._notesPlaceholder = 'Where bought, likes/dislikes, things you want to remember...';
		} else if (mode == 'cellar') {
			titleFromMode = 'Add to Cellar';
			this._instructions = 'Use the sliders to give your personal opinion of the wine';
			this._notesPlaceholder = 'Where bought, price, or who gave it to you...';
		} else if (mode == 'wishlist') {
			titleFromMode = 'Add to Wishlist';
			this._instructions = 'Use the sliders to give your personal opinion of the wine';
			this._notesPlaceholder = 'Where you saw it, price, and why you want it, etc...';
		}
		
		this._navBarContent = {
			"title": titleFromMode,
			"cellarTotal": null
		}
		
		this._tabsConfig = {
			"tabsArray": [
				{
					"label": "Visual",
					"view": "visual"
				},
				{
					"label": "Aroma",
					"view": "aroma"
				},
				{
					"label": "Taste",
					"view": "taste"
				},
				{
					"label": "Finish",
					"view": "finish"
				},
				{
					"label": "Overall",
					"view": "overall"
				}
			]
		}
		
		this._contentComponent = TouchTagsComponent;
		
		// HACK TO DETECT OF USER SETS SLIDER VALUE TO '0', forcing the Slider to still trigger a 'done' event.
		$(document).unbind('mouseup touchend');
		$(document).on('mouseup touchend', (e:Event)=> {
			if ( $(e.target).attr('class') == 'slider' &&  $(e.target).val() == 0 && this._totalScore == null) {
				let type = $(e.target).attr('id').split('-')[0];
				this.slideDone(e, type);
			}
		});
	}
	
	// tabClicked(e:Event) {
	// 	console.log('input-wine component tabClicked', e.target);
	// }
	
	openTouchTagsPanel(e:Event) {
		this._slideUpPanel.open();
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
			$('.content-container').animate({
				scrollTop: 5000 // 5000 is way farther than the bottom of the content-container, this just forces it all the way to the bottom of the UI
			}, 'slow', ()=> {
				this.calculateScore();
			});
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
	
	cancelTrackAWine() {
		this._location.back();
	}
	
	saveWine() {
		if (this._mode == 'drinkitnow') {
			this.savePastWine();
		} else if (this._mode == 'cellar') {
			this.saveCellarWine();
		} else if (this._mode == 'wishlist') {
			this.saveWishlistWine();
		}
	}
	
	savePastWine() {
		if (
			this._aromaScore != null &&
			this._tasteScore != null &&
			this._finishScore != null &&
			this._overallScore != null
		) {
			/* TODO
				- call getTouchTags? values and stringify them
				- create the API service to save a wine
			*/
			
			
			// Create new Wine object
			let winemode = 'past';
			
			//get user's local time and store it to .created property
			let usersTime = Date.now();
			
			let commentContent = $('#comments-input').val() || '';
			
			let scoreAromaVal = $('#aroma-slider').val(); // '' empty strings when applying this to Cellar or Wishlist
			let scoreTasteVal = $('#taste-slider').val();
			let scoreFinishVal = $('#finish-slider').val();
			let scoreOverallImpressionVal = $('#overall-slider').val();
			let scoreTotalVal = this._totalScore;
			
			let quantityInput = $('#input-quantity').val() || 1; // I think this only applies to cellar wines
			
			let groupDescriptionVal = 'none';
			
			let wineObj = new Object();
			wineObj["create"] = usersTime;
			wineObj["comment"] = commentContent;
			wineObj["quantity"] = quantityInput;
			wineObj["groupDescription"] = groupDescriptionVal;
			wineObj["scoreAroma"] = scoreAromaVal;
			wineObj["scoreTaste"] = scoreTasteVal;
			wineObj["scoreFinish"] = scoreFinishVal;
			wineObj["scoreOverallImpression"] = scoreOverallImpressionVal;
			wineObj["scoreTotal"] = scoreTotalVal;
			
			// wineObj["photo"] = this._globals._photoFile; // Probably don't need this attribute to create a new wine since it will be a photoURL that gets generated on the back-end.
			
			wineObj["mode"] = winemode;
			wineObj["hidden"] = false;
			// wineObj["visualTags"] = JSON.stringify( $scope.selectedVisualTags );
			// wineObj["aromaTags"] =  JSON.stringify( $scope.selectedAromaTags );
			// wineObj["tasteTags"] = JSON.stringify( $scope.selectedTasteTags );
			// wineObj["finishTags"] = JSON.stringify( $scope.selectedFinishTags );
			// wineObj["overallTags"] = JSON.stringify( $scope.selectedOverallTags );
			// console.log('wineObj:', wineObj);
			console.log('_contentComponent', this._slideUpPanel._loadedComponentRef.instance.getSelectedTouchTags() );
			
			
			// TODO
			// ViewController.ShowSpinner('Uploading...');
			
			// window.currentWineIndex = 0;
			// $location.search().index = 0;
			
			$('.loading-icon-container span').text('Uploading...');
			$('.loading-icon-container').show();
			
			this._apiService.saveWine(wineObj, this._globals._photoFile).subscribe((response:any)=> {
				console.log('api saveWine Reponse:', response);
				this._router.navigate(['mywines','past', 'gallery', '0']); // loading icon container will be hid by mywines view
			});
			
			//wine.$save(function(response) {
				// ViewController.HideUploading();
				// ViewController.ResetSliders();
				// delete window.__file;
				
				// mixpanel.track('created a wine: '+response.mode, {
				// 	'wine_id': response._id,
				// 	'mode': response.mode,
				// 	'photoURL': 'https://winetrackerco.imgix.net/'+response.photoURL,
				// 	'scoreTotal': response.scoreTotal,
				// 	'comment': response.comment
				// });
				
				// $scope.resetViewStates();
				
				// $location.path( destination );
				
				// setTimeout(function() {
					// TODO
					// $scope.displaySharingPanel( response );
				// }, 2000);
				
				
			// }, function(errorResponse) {
			// 	console.log('ERROR', errorResponse.data.message);
			// 	return false;
			// });
			
			
			
			console.log('SAVE past wine');
		} else {
			
			// TODO: MAKE GLOBAL ALERT PANEL
			/*
			if ($scope.launchFromCordova) {
				navigator.notification.alert(
					'Please use all the scoring sliders before saving your wine.',  // message
					$scope.alertCallback('wishlist'),         // callback
					'Not Done Yet',            // title
					'Okay'                  // buttonName
				);
			} else {
			*/
				alert('Please use all the scoring sliders before saving your wine.');
			// }
			return;
		}
		
		
		
	}
	
	saveCellarWine() {
		console.log('save cellar wine');
	}
	
	saveWishlistWine() {
		console.log('save wishlist wine');
	}
	
}
