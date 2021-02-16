import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { CanDeactivateGuard } from '@guards/can-deactivate.guard';
import { CommonModule } from '@angular/common';
import { FullSizeImageComponent } from './full-size-image/full-size-image.component';
import { FullSizeImageViewerComponent } from './full-size-image-viewer_component/full-size-image-viewer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ImageNameComponent } from './image-name/image-name.component';
import { ImageDescriptionComponent } from './image-description/image-description.component';
import { ImageTagsComponent } from './image-tags/image-tags.component';
import { ImageDateComponent } from './image-date/image-date.component';
import { ImageLocationComponent } from './image-location/image-location.component';
import { LibraryModulePathData as libModulePath } from '../library/library-module-path.data';
import { LocationMapComponent } from './location-map/location-map.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteParamIDData as paramID} from '@read-only-data/route-param-id.data';
import { BelongsToLibrariesComponent } from './belongs-to-libraries.component';
import { AppModulePathData as appModulePath } from '@app/app-module-path.data';


@NgModule({
	declarations: [
		FullSizeImageViewerComponent,
		FullSizeImageComponent,
		ImageNameComponent,
		ImageDescriptionComponent,
		ImageTagsComponent,
		ImageDateComponent,
		ImageLocationComponent,
		LocationMapComponent,
		BelongsToLibrariesComponent
	],
	imports: [
		CommonModule,
		GoogleMapsModule,
		RouterModule.forChild([
			{
				path: `:${paramID.imageID}`,
				component: FullSizeImageViewerComponent,
				canActivate: [AuthenticatedGuard],
				canDeactivate: [CanDeactivateGuard]
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: `/${appModulePath.LibraryModule}/` + libModulePath.LibraryComponent
			}
		])
	],

	exports: [FullSizeImageViewerComponent]
})
export class FullSizeImageViewerModule {
}
