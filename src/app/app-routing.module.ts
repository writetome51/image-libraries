import { AppModulePathData as modulePath } from './app-module-path.data';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

	{
		path: modulePath.NewUserModule,
		// example of lazy-loading a module:
		loadChildren: () => import('./new-user/new-user.module').then(mod => mod.NewUserModule)
	},

	{
		path: modulePath.LibrariesModule,
		loadChildren: () => import('./libraries/libraries.module').then(mod => mod.LibrariesModule)
	},

	{
		path: modulePath.LibraryModule,
		loadChildren: () => import('./library/library.module').then(mod => mod.LibraryModule)
	},

	{
		path: modulePath.SecurityQuestionModule,
		loadChildren: () => import('./security-question/security-question.module')
			.then(mod => mod.SecurityQuestionModule)
	},

	{
		path: modulePath.FullSizeImageViewerModule,
		loadChildren: () => import('./full-size-image-viewer/full-size-image-viewer.module')
			.then(mod => mod.FullSizeImageViewerModule)
	},

	{
		path: modulePath.LoginModule,
		pathMatch: 'full',
		loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
	},

	// Wildcard path must come last, meaning if none of the above paths apply, do this.
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
