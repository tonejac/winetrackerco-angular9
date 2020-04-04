import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-view-switcher',
	templateUrl: './view-switcher.component.html',
	styleUrls: ['./view-switcher.component.css']
})
export class ViewSwitcherComponent implements OnInit {
	
	_buttonsList:any;
	_plusButtonPoints = [];
	_totalPoints:any;
	_radius:any;
	
	constructor() { }
	
	ngOnInit(): void {
		
		$('.button-plus-icon').unbind('click');
		$('.button-plus-icon').on('click', ()=> {
			
			if ( $('.button-plus-icon').attr('data-state') == "open" ) {
				this.closePlusButtonChildren();
				$('.button-plus-icon').find('svg rect, svg path').css({
					'fill':'#a48d61'
				});
				$('.button-plus-icon').attr('data-state', 'closed');
			} else if ( $('.button-plus-icon').attr('data-state') == 'closed' ) {
				this._buttonsList = $('.action-buttons-container .sub-nodes').find('button');
				var centerX = 0;
				var centerY = 0;
				
				this.calculateButtonPositions( 4, {xPos:centerX, yPos:centerY}, 110 );

				for (var i=0; i<(this._plusButtonPoints.length); i++) {
					$(this._buttonsList[i]).css({'display':'block'}).transition({
						x:(this._plusButtonPoints[i].xPos+'px'),
						y:(this._plusButtonPoints[i].yPos+'px'),
						width:'50px',
						height:'50px',
						borderRadius:'25px',
						opacity:'1.0'
					}, 300, 'easeOutQuad');
				}
				$(this).attr('data-state', 'open');
				
				$('.button-plus-icon').find('svg rect, svg path').css({
					'fill':'#ffffff'
				});
				
				$('.action-buttons-container-bg').transition({
					opacity:'0.75'
				}, 300, 'linear');
			}
		});
		
		let view = 'gallery';
		
		if (view === 'list') {
			$('.nav-bar-view-switcher-container').addClass('list');
			$('.nav-bar-view-switcher-container').removeClass('grid');
			$('.nav-bar-view-switcher-container').removeClass('gallery');
			$('.body-container').addClass('transparent-bg');
		} else if (view === 'grid') {
			$('.nav-bar-view-switcher-container').removeClass('list');
			$('.nav-bar-view-switcher-container').addClass('grid');
			$('.nav-bar-view-switcher-container').removeClass('gallery');
			$('.body-container').addClass('transparent-bg');
		} else if (view === 'gallery') {
			$('.nav-bar-view-switcher-container').removeClass('list');
			$('.nav-bar-view-switcher-container').removeClass('grid');
			$('.nav-bar-view-switcher-container').addClass('gallery');
			$('.body-container').removeClass('transparent-bg');
		} else {
			$('.nav-bar-view-switcher-container').removeClass('list');
			$('.nav-bar-view-switcher-container').removeClass('grid');
			$('.nav-bar-view-switcher-container').removeClass('gallery');
			$('.action-buttons-container').hide();
			$('.body-container').removeClass('transparent-bg');
		}
		
		$('.nav-bar-view-switcher-container').show();
		
		
		$(".button-plus-remove-from-past-wines").on("click", function() {
			// DELETE THE WINE
		});
		
	}
	
	
	closePlusButtonChildren() {
		for (let i=0; i<(this._plusButtonPoints.length); i++) {
			$(this._buttonsList[i]).transition({
				x:'0px',
				y:'0px',
				width:'40px',
				height:'40px',
				borderRadius:'20px',
				opacity:'0.0'
			}, 300, 'easeOutQuad', function() {
				$(this).css({'display':'none'});
			});
		}
		
		$('.button-plus-icon').find('svg rect, svg path').css({
			'fill':'#a48d61'
		});
		
		$('.button-plus-icon').attr('data-state', 'closed');
		
		$('.action-buttons-container-bg').transition({
			opacity:'0.0'
		}, 300, 'linear');
	}
	
	calculateButtonPositions(totalPoints, centerObj, radius) {
		var items = totalPoints;
		var startTheta = 0.935 * Math.PI;
		var endTheta = 0.435 * Math.PI;
		var outerCircleRadius = radius;
		var cx = centerObj.xPos;
		var cy = centerObj.yPos;
		
		for(var i = 0; i < items; i++) {
			var theta = startTheta + (endTheta - startTheta) * i / (items - 1)
			var x = Math.round( cx + outerCircleRadius * Math.cos(theta) );
			var y = Math.round( cy + outerCircleRadius * Math.sin(theta) );   
			this._plusButtonPoints.push({"xPos":x, "yPos":y});
		}
	}
	
	/*
	
	InitPlusButtonControls: function() {
			
			$(".button-plus-icon").unbind('click');
			$(".button-plus-icon").on("click", function() {
				if ( $(this).attr('data-state') == "open" ) {
					ViewController.ClosePlusButtonChildren();
					$(this).find('svg rect, svg path').css({
						'fill':'#a48d61'
					});
					$(this).attr('data-state', 'closed');
				} else if ( $(this).attr('data-state') == 'closed' ) {
					_buttonsList = $(".action-buttons-container .sub-nodes").find("button");
					var centerX = 0;
					var centerY = 0;
					
					ViewController.CalculateButtonPositions( 4, {xPos:centerX, yPos:centerY}, 110 );

					for (var i=0; i<(_plusButtonPoints.length); i++) {
						$(_buttonsList[i]).css({"display":"block"}).transition({
							x:(_plusButtonPoints[i].xPos+"px"),
							y:(_plusButtonPoints[i].yPos+"px"),
							width:"50px",
							height:"50px",
							borderRadius:"25px",
							opacity:"1.0"
						}, 300, "easeOutQuad");
					}
					$(this).attr('data-state', "open");
					
					$(".button-plus-icon").find('svg rect, svg path').css({
						'fill':'#ffffff'
					});
					
					$('.action-buttons-container-bg').transition({
						opacity:'0.75'
					}, 300, 'linear');
				}
				
			});
			
			
			$(".button-plus-remove-from-past-wines").on("click", function() {
				// DELETE THE WINE
			});
			
		},
		
		ClosePlusButtonChildren: function() {
			for (var i=0; i<(_plusButtonPoints.length); i++) {
				$(_buttonsList[i]).transition({
					x:"0px",
					y:"0px",
					width:"40px",
					height:"40px",
					borderRadius:"20px",
					opacity:"0.0"
				}, 300, "easeOutQuad", function() {
					$(this).css({"display":"none"});
				});
			}
			
			$(".button-plus-icon").find('svg rect, svg path').css({
				'fill':'#a48d61'
			});
			
			$(".button-plus-icon").attr('data-state', 'closed');
			
			$('.action-buttons-container-bg').transition({
				opacity:'0.0'
			}, 300, 'linear');
		},

		CalculateButtonPositions: function(totalPoints, centerObj, radius) {
			var items = totalPoints;
			var startTheta = 0.935 * Math.PI;
			var endTheta = 0.435 * Math.PI;
			var outerCircleRadius = radius;
			var cx = centerObj.xPos;
			var cy = centerObj.yPos;
			
			for(var i = 0; i < items; i++) {
				var theta = startTheta + (endTheta - startTheta) * i / (items - 1)
				var x = Math.round( cx + outerCircleRadius * Math.cos(theta) );
				var y = Math.round( cy + outerCircleRadius * Math.sin(theta) );   
				_plusButtonPoints.push({"xPos":x, "yPos":y});
			}
		},
	
	*/
	
}
