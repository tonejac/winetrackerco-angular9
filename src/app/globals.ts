import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class Globals {
	
	_currentWinesList:any = [
		{
			"image": "https://winetrackerco.imgix.net/900bf4c10ce9b0879a1fdb1c7cd30158?w=&h=1024",
			"thumbnail": "https://winetrackerco.imgix.net/900bf4c10ce9b0879a1fdb1c7cd30158?w=320&h=320&fit=crop",
			"title": "One",
			"id": "1234"
		},
		{
			"image": "https://winetrackerco.imgix.net/1d5187c0ad4d95548213b03810058cbf?w=&h=1024",
			"thumbnail": "https://winetrackerco.imgix.net/1d5187c0ad4d95548213b03810058cbf?w=320&h=320&fit=crop",
			"title": "Two",
			"id": "2345"
		},
		{
			"image": "https://winetrackerco.imgix.net/4d6d4c42bc5218d64fb134f4a8eb9f5f?w=&h=1024",
			"thumbnail": "https://winetrackerco.imgix.net/4d6d4c42bc5218d64fb134f4a8eb9f5f?w=320&h=320&fit=crop",
			"title": "Three",
			"id": "3456"
		},
		{
			"image": "https://winetrackerco.imgix.net/859a4f1cf65ec4ab73d7535989a82b1a?w=&h=1024",
			"thumbnail": "https://winetrackerco.imgix.net/859a4f1cf65ec4ab73d7535989a82b1a?w=320&h=320&fit=crop",
			"title": "Four",
			"id": "4321"
		},
		{
			"image": "https://winetrackerco.imgix.net/900bf4c10ce9b0879a1fdb1c7cd30158?w=&h=1024",
			"thumbnail": "https://winetrackerco.imgix.net/900bf4c10ce9b0879a1fdb1c7cd30158?w=320&h=320&fit=crop",
			"title": "Five",
			"id": "5432"
		},
		{
			"image": "https://winetrackerco.imgix.net/1d5187c0ad4d95548213b03810058cbf?w=&h=1024",
			"thumbnail": "https://winetrackerco.imgix.net/1d5187c0ad4d95548213b03810058cbf?w=320&h=320&fit=crop",
			"title": "Six",
			"id": "6543"
		},
		{
			"image": "https://winetrackerco.imgix.net/4d6d4c42bc5218d64fb134f4a8eb9f5f?w=&h=1024",
			"thumbnail": "https://winetrackerco.imgix.net/4d6d4c42bc5218d64fb134f4a8eb9f5f?w=320&h=320&fit=crop",
			"title": "Seven",
			"id": "7654"
		},
		{
			"image": "https://winetrackerco.imgix.net/859a4f1cf65ec4ab73d7535989a82b1a?w=&h=1024",
			"thumbnail": "https://winetrackerco.imgix.net/859a4f1cf65ec4ab73d7535989a82b1a?w=320&h=320&fit=crop",
			"title": "Eight",
			"id": "8754"
		}
	];
	
	_photoFile:any;
	
	_touchTagsCategoryChange = new EventEmitter();
	_currentTouchTagsCategory:any;
	_bottomBarDone = new EventEmitter();
	
	constructor() {
		
	}
}