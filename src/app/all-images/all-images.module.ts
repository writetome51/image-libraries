import { AllImagesComponent } from './all-images.component';
import { AllImagesModuleRoutesData as moduleRoutes } from './all-images-module-routes.data';
import { AllImagesPaginationControlsComponent }
	from './all-images-pagination-controls.component';
import { AppActionMenuModule } from '../shared/modules/app-action-menu/app-action-menu.module';
import { AppPaginationControlsModule }
	from '../shared/modules/app-pagination-controls/app-pagination-controls.module';
import { AppValidatingFormInputsModule }
	from '../shared/modules/app-validating-form-inputs/app-validating-form-inputs.module';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { BigLoadingSpinnerModule }
	from '../shared/modules/big-loading-spinner/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { DeleteSelectedImagesButtonComponent }
	from './delete-selected-images-button/delete-selected-images-button.component';
import { ImageListComponent } from './image-list/image-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartDataProcessButtonModule }
	from '../shared/modules/start-data-process-button/start-data-process-button.module';
import { ThumbnailImageContainerModule }
	from '../shared/modules/thumbnail-image-container/thumbnail-image-container.module';


@NgModule({
	declarations: [
		AllImagesComponent,
		AllImagesPaginationControlsComponent,
		DeleteSelectedImagesButtonComponent,
		ImageListComponent
	],
	imports: [
		CommonModule,
		AppActionMenuModule,
		AppPaginationControlsModule,
		BigLoadingSpinnerModule,
		StartDataProcessButtonModule,
		ThumbnailImageContainerModule,
		AppValidatingFormInputsModule,
		RouterModule.forChild([
			{
				path: moduleRoutes.AllImagesComponent,
				component: AllImagesComponent,
				canActivate: [AuthenticatedGuard]
			},

			{path: '**', redirectTo: '/'}
		])
	]
})
export class AllImagesModule {
}
