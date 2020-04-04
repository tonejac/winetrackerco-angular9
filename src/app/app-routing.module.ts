import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyWinesComponent } from './my-wines/my-wines.component';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'mywines',
		component: MyWinesComponent
	},
	{
		path: 'gallery/:category',
		component: GalleryViewComponent
	},
	{
		path: 'list/:category',
		component: GalleryViewComponent
	},
	{
		path: 'grid/:category',
		component: GalleryViewComponent
	}
	
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			routes,
			{ useHash: true }
		)
	],
	exports: [RouterModule]
})

export class AppRoutingModule {
	
}
