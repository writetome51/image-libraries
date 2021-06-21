import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { CanDeactivateGuard } from '@guards/can-deactivate.guard';
import { CommonModule } from '@angular/common';
import { FullSizeImageComponent } from './full-size-image.component';
import { FullSizeImageViewerComponent } from './full-size-image-viewer_component/full-size-image-viewer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ImageNameComponent } from './image-name_component/image-name.component';
import { ImageDescriptionComponent }
	from './image-description_component/image-description.component';
import { ImageTagsComponent } from './image-tags_component/image-tags.component';
import { ImageDateComponent } from './image-date_component/image-date.component';
import { ImageLocationComponent } from './image-location_component/image-location.component';
import { LocationMapComponent } from './location-map_component/location-map.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteParamIDData as paramID} from '@read-only-data/route-param-id.data';
import { BelongsToLibrariesComponent } from './belongs-to-libraries.component';
import { AppModulePathData as appModulePath } from '@app/app-module-path.data';
import { SaveChangesButtonComponent } from './save-changes-button.component';
import { ExecuteFunctionButtonModule } from '@execute-function-button_module/execute-function-button.module';
import { SubmitFormButtonModule } from '@submit-form-button_module/submit-form-button.module';
import { AllImagesModulePathData as allImagesModulePath }
	from '@app/routed-modules/all-images_module/all-images-module-path.data';
import { ImagesLoadedGuard } from './images-loaded.guard';


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
		BelongsToLibrariesComponent,
		SaveChangesButtonComponent
	],
	imports: [
		CommonModule,
		GoogleMapsModule,
		ExecuteFunctionButtonModule,
		RouterModule.forChild([
			{
				path: `:${paramID.imageName}`,
				component: FullSizeImageViewerComponent,
				canActivate: [AuthenticatedGuard, ImagesLoadedGuard],
				canDeactivate: [CanDeactivateGuard]
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: `/${appModulePath.AllImagesModule}/${allImagesModulePath.defaultPath}`
			}
		]),
		SubmitFormButtonModule
	],

	exports: [FullSizeImageViewerComponent]
})
export class FullSizeImageViewerModule {}
