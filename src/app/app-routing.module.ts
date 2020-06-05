import { AppModuleRouteService as moduleRoute } from './app-module-route.service';
import { DeAuthenticatedGuard } from './guards/de-authenticated.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

	{
		path: moduleRoute.NewUserModule, // can only access when logged out
		// example of lazy-loading a module:
		loadChildren: () => import('./new-user/new-user.module').then(mod => mod.NewUserModule)
	},

	{
		path: moduleRoute.LibrariesModule,
		loadChildren: () => import('./libraries/libraries.module').then(mod => mod.LibrariesModule)
	},

	{
		path: moduleRoute.LibraryModule,
		loadChildren: () => import('./library/library.module').then(mod => mod.LibraryModule)
	},

	{
		path: moduleRoute.SecurityQuestionModule,
		loadChildren: () => import('./security-question/security-question.module')
			.then(mod => mod.SecurityQuestionModule)
	},

	{
		path: moduleRoute.AllImagesModule,
		loadChildren: () => import('./all-images/all-images.module').then(mod => mod.AllImagesModule)
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
