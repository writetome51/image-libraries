import { AppModuleRoutesData as moduleRoutes } from './app-module-routes.data';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

	{
		path: moduleRoutes.NewUserModule, // can only access when logged out
		// example of lazy-loading a module:
		loadChildren: () => import('./new-user/new-user.module').then(mod => mod.NewUserModule)
	},

	{
		path: moduleRoutes.LibrariesModule,
		loadChildren: () => import('./libraries/libraries.module').then(mod => mod.LibrariesModule)
	},

	{
		path: moduleRoutes.LibraryModule,
		loadChildren: () => import('./library/library.module').then(mod => mod.LibraryModule)
	},

	{
		path: moduleRoutes.SecurityQuestionModule,
		loadChildren: () => import('./security-question/security-question.module')
			.then(mod => mod.SecurityQuestionModule)
	},

	{
		path: moduleRoutes.FullSizeImageViewerModule,
		loadChildren: () => import('./full-size-image-viewer/full-size-image-viewer.module')
			.then(mod => mod.FullSizeImageViewerModule)
	},

	{
		path: moduleRoutes.LoginModule,
		pathMatch: 'full',
		loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
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
