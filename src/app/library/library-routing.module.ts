import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { LibraryComponent } from './library.component';
import { LibraryModuleRouteService as moduleRoute } from './library-module-route.service';
import { LibraryExistsGuard } from '../guards/library-exists.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

	{	// lazy-loaded module
		path: moduleRoute.ImageViewerModule,
		loadChildren: () => import('./image-viewer/image-viewer.module')
			.then(mod => mod.ImageViewerModule)
	},

	{
		path: moduleRoute.LibraryComponent,
		component: LibraryComponent,
		canActivate: [AuthenticatedGuard, LibraryExistsGuard],
		// 'canDeactivate' means the guard decides if the component can be destroyed.
		// A reason it would decide not to is if the user has changes he hasn't saved yet.
		canDeactivate: [CanDeactivateGuard]
	},

	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/libraries'
	},

	// This path must come last, meaning if none of the above paths apply, do this.
	{path: '**', redirectTo: '/**'}
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
