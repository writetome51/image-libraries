import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { CanDeactivateGuard } from '@guards/can-deactivate.guard';
import { CommonModule } from '@angular/common';
import { FullSizeImageComponent } from './full-size-image/full-size-image.component';
import { FullSizeImageViewerComponent } from './full-size-image-viewer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ImageNameComponent } from './image-name/image-name.component';
import { ImageDescriptionComponent } from './image-description/image-description.component';
import { ImageTagsComponent } from './image-tags/image-tags.component';
import { ImageDateComponent } from './image-date/image-date.component';
import { ImageLocationComponent } from './image-location/image-location.component';
import { LibraryModuleRoutesData } from '../library/library-module-routes.data';
import { LocationMapComponent } from './location-map/location-map.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { URLParamIDData as paramID} from '@read-only-data/url-param-id.data';


@NgModule({
	declarations: [
		FullSizeImageViewerComponent,
		FullSizeImageComponent,
		ImageNameComponent,
		ImageDescriptionComponent,
		ImageTagsComponent,
		ImageDateComponent,
		ImageLocationComponent,
		LocationMapComponent
	],
	imports: [
		CommonModule,
		GoogleMapsModule,

		RouterModule.forChild([
			{
				path: `:${paramID.imageName}`,
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
