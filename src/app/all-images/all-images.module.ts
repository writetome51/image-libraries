import { AllImagesComponent } from './all-images.component';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';
import { ThumbnailImageModule } from '../thumbnail-image/thumbnail-image.module';
import { BigLoadingSpinnerModule } from '../big-loading-spinner/big-loading-spinner.module';
import { AppPaginationControlsModule } from '../app-pagination-controls/app-pagination-controls.module';
import { ImageListComponent } from './image-list/image-list.component';
import { AllImagesPaginationControlsComponent } from './all-images-pagination-controls.component';
import { DeleteSelectedImagesButtonComponent }
	from './delete-selected-images-button/delete-selected-images-button.component';
import { StartDataProcessButtonModule }
	from '../start-data-process-button/start-data-process-button.module';
import { AllImagesModuleRouteData as moduleRoute} from './all-images-module-route.data';


@NgModule({
	declarations: [
		AllImagesComponent,
		ImageListComponent,
		AllImagesPaginationControlsComponent,
		DeleteSelectedImagesButtonComponent
	],
	imports: [
		CommonModule,
		BigLoadingSpinnerModule,
		ThumbnailImageModule,
		AppPaginationControlsModule,
		ValidatingInputsModule,
		StartDataProcessButtonModule,
		RouterModule.forChild([
			{
				path: moduleRoute.AllImagesComponent,
				component: AllImagesComponent,
				canActivate: [AuthenticatedGuard]
			},

			{path: '**', redirectTo: '/'}
		])
	]
})
export class AllImagesModule {
}
