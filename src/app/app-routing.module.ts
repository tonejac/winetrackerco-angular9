import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginChoiceComponent } from './user/login-choice/login-choice.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { TrackAWineComponent } from './track-a-wine/track-a-wine.component';
import { MyWinesComponent } from './my-wines/my-wines.component';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { InputWineComponent } from './track-a-wine/input-wine/input-wine.component';
import { AuthGuard } from './auth.guard';
import { WinesViewerComponent } from './wines-viewer/wines-viewer.component';
import { ApiResolver } from './api.resolver';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'user/login-choice',
		component: LoginChoiceComponent
	},
	{
		path: 'user/signin',
		component: SigninComponent
	},
	{
		path: 'user/signup',
		component: SignupComponent
	},
	{
		path: 'trackawine',
		component: TrackAWineComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'trackawine/input/:mode',
		component: InputWineComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'mywines',
		component: MyWinesComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'mywines/:category/:type/:index',
		component: WinesViewerComponent,
		resolve: {
			apiData: ApiResolver
		},
		data: {
			resolveMethod: 'getMyWinesData'
		}
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
