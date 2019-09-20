import { AddImagesComponent } from './add-images/add-images.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { DeauthenticationGuard } from './guards/deauthentication.guard';


const routes: Routes = [

	/********************
	 Example routes:

	 { path: 'hero/:id',  component: HeroDetailComponent },
	 {
 		path: 'heroes',
		component: HeroListComponent,
		data: { title: 'Heroes List' }
	},
	 *******************/
	{
		path: '', // the logged-out homepage
		component: IntroductionComponent,
		pathMatch: 'full'
	},
	{
		path: 'libraries', // the logged-in homepage
		component: LibrariesComponent,
		// 'canActivate' means the guard decides if the component can be activated (instantiated).
		canActivate: [AuthenticationGuard]
	},

	// 'libraries' will need a sub-path referring to the library that's opened:
	//  {
	//     path: libraries/:libraryName,
	//     component: LibraryComponent,
	//     // 'canDeactivate' means the guard decides if the component can be destroyed.
	//     // A reason it would decide not to is if the user may have changes he hasn't saved yet.
	//     canDeactivate: [CanDeactivateGuard]
	//  }

	{
		path: 'libraries/:libraryName/image/:image_index_in_library', // can only access when logged in
		component: ImageViewerComponent,
		canActivate: [AuthenticationGuard],
		canDeactivate: [CanDeactivateGuard]
	},

	{
		path: 'create-user', // can only access when logged out
		component: CreateUserComponent,
		canActivate: [DeauthenticationGuard]
	},
	{
		path: 'add-images', // can only access when logged in
		component: AddImagesComponent,
		canActivate: [AuthenticationGuard]
	},

	// This path must come last, meaning if none of the above paths apply, do this.
	{path: '**', component: PageNotFoundComponent}
];


@NgModule({
	imports: [
		RouterModule.forRoot(
			routes,
			//	{enableTracing: true} // <-- debugging purposes only
		)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
