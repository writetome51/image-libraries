import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageViewerComponent } from './image-viewer.component';
import { AuthenticatedGuard } from '../../guards/authenticated.guard';
import { CanDeactivateGuard } from '../../guards/can-deactivate.guard';


const routes: Routes = [
	{
		path: 'library/:libraryName/image/:imageIndex', // can only access when logged in
		component: ImageViewerComponent,
		canActivate: [AuthenticatedGuard],
		canDeactivate: [CanDeactivateGuard]
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
export class ImageViewerRoutingModule {
}
