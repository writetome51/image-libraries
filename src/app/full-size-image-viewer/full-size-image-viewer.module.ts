import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { CommonModule } from '@angular/common';
import { FullSizeImageComponent } from './full-size-image/full-size-image.component';
import { FullSizeImageViewerComponent } from './full-size-image-viewer.component';
import { ImageNameComponent } from './image-name/image-name.component';
import { ImageDescriptionComponent } from './image-description/image-description.component';
import { ImageTagsComponent } from './image-tags/image-tags.component';
import { ImageDateComponent } from './image-date/image-date.component';
import { ImageLocationComponent } from './image-location/image-location.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { LibraryModuleRoutesData } from '../library/library-module-routes.data';


@NgModule({
	declarations: [
		FullSizeImageComponent,
		FullSizeImageViewerComponent,
		ImageNameComponent,
		ImageDescriptionComponent,
		ImageTagsComponent,
		ImageDateComponent,
		ImageLocationComponent
	],
	imports: [
		CommonModule,
		GoogleMapsModule,
		RouterModule.forChild([
			{
				path: ':imageIndex', // can only access when logged in
				component: FullSizeImageViewerComponent,
				canActivate: [AuthenticatedGuard],
				canDeactivate: [CanDeactivateGuard]
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: '/library/' + LibraryModuleRoutesData.LibraryComponent
			}
		])
	],
	exports: [FullSizeImageViewerComponent]
})
export class FullSizeImageViewerModule {
}
