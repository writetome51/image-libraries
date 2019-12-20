import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { AddImagesComponent } from './add-images/add-images.component';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { LibraryComponent } from './library.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryModuleRouteService as moduleRoute } from './library-module-route.service';


const routes: Routes = [
	{
		path: moduleRoute.AddImagesComponent,
		component: AddImagesComponent,
		canActivate: [AuthenticatedGuard]
	},

	{	// lazy-loaded module
		path: moduleRoute.ImageViewerModule,
		loadChildren: () => import('./image-viewer/image-viewer.module')
			.then(mod => mod.ImageViewerModule)
	},

	{
		path: moduleRoute.LibraryComponent,
		component: LibraryComponent,
		canActivate: [AuthenticatedGuard],
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
