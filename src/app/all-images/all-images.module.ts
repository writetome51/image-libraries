import { AllImagesComponent } from './all-images.component';
import { AllImagesModuleRoutesData as moduleRoutes } from './all-images-module-routes.data';
import { AllImagesPaginationControlsComponent } from './all-images-pagination-controls.component';
import { AppActionMenuModule } from '../app-action-menu/app-action-menu.module';
import { AppPaginationControlsModule } from '../app-pagination-controls/app-pagination-controls.module';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { BigLoadingSpinnerModule } from '../big-loading-spinner/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { DeleteSelectedImagesButtonComponent }
	from './delete-selected-images-button/delete-selected-images-button.component';
import { ImageListComponent } from './image-list/image-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartDataProcessButtonModule }
	from '../start-data-process-button/start-data-process-button.module';
import { AppThumbnailImageModule } from '../app-thumbnail-image/app-thumbnail-image.module';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';


@NgModule({
	declarations: [
		AllImagesComponent,
		AllImagesPaginationControlsComponent,
		DeleteSelectedImagesButtonComponent,
		ImageListComponent,
	],
	imports: [
		CommonModule,
		AppActionMenuModule,
		AppPaginationControlsModule,
		BigLoadingSpinnerModule,
		StartDataProcessButtonModule,
		AppThumbnailImageModule,
		ValidatingInputsModule,
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
