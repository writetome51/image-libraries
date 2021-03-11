import { AppModulePathData as modulePath } from './app-module-path.data';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

	// longer routes come first:

	{
		path: modulePath.SecurityQuestionModule,
		// example of lazy-loading a module:
		loadChildren: () => import(
			'./routed-modules/security-question_module/security-question.module'
		).then(mod => mod.SecurityQuestionModule)
	},

	{
		path: modulePath.NewUserModule,
		loadChildren: () => import('./routed-modules/new-user_module/new-user.module')
			.then(mod => mod.NewUserModule)
	},

	{
		path: modulePath.UpdateUserModule,
		loadChildren: () => import('./routed-modules/update-user_module/update-user.module')
			.then(mod => mod.UpdateUserModule)
	},

	{
		path: modulePath.AddImagesModule,
		loadChildren: () => import('./routed-modules/add-images_module/add-images.module')
			.then(mod => mod.AddImagesModule)
	},

	{
		path: modulePath.AllImagesModule,
		loadChildren: () => import('./routed-modules/all-images_module/all-images.module')
			.then(mod => mod.AllImagesModule)
	},

	{
		path: modulePath.LibrariesModule,
		loadChildren: () => import('./routed-modules/libraries_module/libraries.module')
			.then(mod => mod.LibrariesModule)
	},

	{
		path: modulePath.LibraryModule,
		loadChildren: () => import('./routed-modules/library_module/library.module')
			.then(mod => mod.LibraryModule)
	},

	{
		path: modulePath.FullSizeImageViewerModule,
		loadChildren: () => import(
			'./routed-modules/full-size-image-viewer_module/full-size-image-viewer.module'
		).then(mod => mod.FullSizeImageViewerModule)
	},

	{
		path: modulePath.LoginModule,
		pathMatch: 'full',
		loadChildren: () => import('./routed-modules/login_module/login.module')
			.then(mod => mod.LoginModule)
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
export class AppRoutingModule {}
