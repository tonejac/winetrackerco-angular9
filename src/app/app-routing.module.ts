import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyWinesComponent } from './my-wines/my-wines.component';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ListViewComponent } from './list-view/list-view.component';


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
		path: 'gallery/:category/:index',
		component: GalleryViewComponent
	},
	{
		path: 'list/:category',
		component: ListViewComponent
	},
	{
		path: 'grid/:category',
		component: GridViewComponent
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
