import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { AddImagesComponent } from './add-images/add-images.component';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { LibraryComponent } from './library.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

	{
		path: 'library/:libraryName',
		component: LibraryComponent,
		canActivate: [AuthenticatedGuard],
		// 'canDeactivate' means the guard decides if the component can be destroyed.
		// A reason it would decide not to is if the user may have changes he hasn't saved yet.
		canDeactivate: [CanDeactivateGuard]
	},

	{
		path: 'library/:libraryName/add-images', // can only access when logged in
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
