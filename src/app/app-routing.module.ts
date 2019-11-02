import { AuthenticatedGuard } from './guards/authenticated.guard';
import { DeauthenticatedGuard } from './guards/deauthenticated.guard';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

	{	// lazy-loaded module
		path: 'update-account',
		loadChildren: () => import('./update-user/update-user.module').then(mod => mod.UpdateUserModule)
	},

	{	// lazy-loaded module
		path: 'create-account', // can only access when logged out
		loadChildren: () => import('./new-user/new-user.module').then(mod => mod.NewUserModule)
	},

	{
		path: 'libraries', // the logged-in homepage
		component: LibrariesComponent,
		// 'canActivate' means the guard decides if the component can be instantiated.
		canActivate: [AuthenticatedGuard]
	},

	{	// lazy-loaded module
		path: 'library',
		loadChildren: () => import('./library/library.module').then(mod => mod.LibraryModule)
	},

	{
		path: '', // the logged-out homepage
		component: IntroductionComponent,
		pathMatch: 'full',
		canActivate: [DeauthenticatedGuard]
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
