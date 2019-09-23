import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { AddImagesComponent } from './add-images/add-images.component';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { LibraryComponent } from './library.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: ':libraryName/add-images',
		component: AddImagesComponent,
		canActivate: [AuthenticatedGuard]
	},

	{	// lazy-loaded module
		path: ':libraryName/image',
		loadChildren: () => import('./image-viewer/image-viewer.module')
			.then(mod => mod.ImageViewerModule)
	},

	{
		path: ':libraryName',
		component: LibraryComponent,
		canActivate: [AuthenticatedGuard],
		// 'canDeactivate' means the guard decides if the component can be destroyed.
		// A reason it would decide not to is if the user may have changes he hasn't saved yet.
		canDeactivate: [CanDeactivateGuard]
	},

	{
		path: '**',
		redirectTo: '/libraries'
	}
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
