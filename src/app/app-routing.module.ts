import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{
		path: 'mywines',
		component: GalleryViewComponent
	},
	
	{
		path: '',
		component: HomeComponent
	},
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
