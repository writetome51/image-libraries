import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { CanDeactivateGuard } from '@guards/can-deactivate.guard';
import { CommonModule } from '@angular/common';
import { FullSizeImageComponent } from './full-size-image.component';
import { FullSizeImageViewerComponent } from './full-size-image-viewer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ImageNameComponent } from './image-name_component/image-name.component';
import { ImageDescriptionComponent }
	from './image-description_component/image-description.component';
import { ImageTagsComponent } from './image-tags_component/image-tags.component';
import { ImageDateComponent } from './image-date_component/image-date.component';
import { ImageLocationComponent } from './image-location_component/image-location.component';
import { LibraryModulePathData as libModulePath } from '../library_module/library-module-path.data';
import { LocationMapComponent } from './location-map_component/location-map.component';
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
