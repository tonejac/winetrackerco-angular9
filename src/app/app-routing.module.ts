import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyWinesComponent } from './my-wines/my-wines.component';


const routes: Routes = [
	{
		path: 'mywines',
		component: MyWinesComponent
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
