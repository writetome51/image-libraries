import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { LibraryComponent } from './library.component';
import { LibraryModuleRoutesData as moduleRoutes } from './library-module-routes.data';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

	{	// lazy-loaded module
		path: moduleRoutes.ImageViewerModule,
		loadChildren: () => import('../image-viewer/image-viewer.module')
			.then(mod => mod.ImageViewerModule)
	},

	{
		path: moduleRoutes.LibraryComponent,
		component: LibraryComponent,
		canActivate: [AuthenticatedGuard],
		// 'canDeactivate' means the guard decides if the component can be destroyed.
		// A reason it would decide not to is if the user has changes he hasn't saved yet.
		canDeactivate: [CanDeactivateGuard]
	},

	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/'
	},

	// This path must come last, meaning if none of the above paths apply, do this.
	{path: '**', redirectTo: '/'}
];


@NgModule({
	imports: [
		RouterModule.forChild(
			routes,
			//	{enableTracing: true} // <-- debugging purposes only
		)
	],
	exports: [RouterModule]
})
export class LibraryRoutingModule {
}
