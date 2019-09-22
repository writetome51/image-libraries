import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { AddImagesComponent } from './add-images/add-images.component';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { LibraryComponent } from './library.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

	// 'libraries' will need a sub-path referring to the library that's opened:
	{
		path: 'libraries/:libraryName',
		component: LibraryComponent,
		// 'canDeactivate' means the guard decides if the component can be destroyed.
		// A reason it would decide not to is if the user may have changes he hasn't saved yet.
		canDeactivate: [CanDeactivateGuard]
	},

	{
		path: 'libraries/:libraryName/image/:image_index_in_library', // can only access when logged in
		component: ImageViewerComponent,
		canActivate: [AuthenticatedGuard],
		canDeactivate: [CanDeactivateGuard]
	},

	{
		path: 'libraries/:libraryName/add-images', // can only access when logged in
		component: AddImagesComponent,
		canActivate: [AuthenticatedGuard]
	}
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
export class LibraryRoutingModule {
}
