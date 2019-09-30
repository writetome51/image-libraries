import { AuthenticatedGuard } from './guards/authenticated.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeauthenticatedGuard } from './guards/deauthenticated.guard';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
	{
		path: 'create-account', // can only access when logged out
		component: CreateUserComponent,
		canActivate: [DeauthenticatedGuard]
	},

	{
		path: 'update-user', // can only access when logged in
		component: UpdateUserComponent,
		canActivate: [AuthenticatedGuard]
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
		path: '', // the logged-out homepage, can only access when logged out
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
