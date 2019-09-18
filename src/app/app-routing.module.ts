import { AddImagesComponent } from './add-images/add-images.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { Routes, RouterModule } from '@angular/router';


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
	//  { path: libraries/:libraryName_or_index, component: LibraryComponent }

	{
		path: 'create-user', // can only access when logged out
		component: CreateUserComponent
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
