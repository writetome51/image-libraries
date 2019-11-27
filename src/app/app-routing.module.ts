import { AppModuleRouteService as moduleRoute } from './app-module-route.service';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { DeAuthenticatedGuard } from './guards/de-authenticated.guard';
import { GetSecurityQuestionComponent } from './get-security-question/get-security-question.component';
import { LoginComponent } from './login/login.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

	{	// lazy-loaded module
		path: moduleRoute.UpdateUserModule,
		loadChildren: () => import('./update-user/update-user.module').then(mod => mod.UpdateUserModule)
	},

	{	// lazy-loaded module
		path: moduleRoute.NewUserModule, // can only access when logged out
		loadChildren: () => import('./new-user/new-user.module').then(mod => mod.NewUserModule)
	},

	{
		path: moduleRoute.LibrariesComponent, // the logged-in homepage
		component: LibrariesComponent,
		// 'canActivate' means the guard decides if the component can be instantiated.
		canActivate: [AuthenticatedGuard]
	},

	{	// lazy-loaded module
		path: moduleRoute.LibraryModule,
		loadChildren: () => import('./library/library.module').then(mod => mod.LibraryModule)
	},

	{
		path: moduleRoute.GetSecurityQuestionComponent,
		component: GetSecurityQuestionComponent,
		canActivate: [DeAuthenticatedGuard]
	},

	{
		path: '', // the logged-out homepage
		component: LoginComponent,
		pathMatch: 'full',
		canActivate: [DeAuthenticatedGuard]
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
