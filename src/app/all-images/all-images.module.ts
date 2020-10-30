import { AllImagesComponent } from './all-images.component';
import { AllImagesModuleRoutesData as moduleRoutes } from './all-images-module-routes.data';
import { AllImagesPaginationControlsComponent } from './all-images-pagination-controls.component';
import { AppPaginationControlsModule } from '@app-pagination-controls/app-pagination-controls.module';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { BigLoadingSpinnerModule } from '@big-loading-spinner/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { GlobalActionMenuModule } from '@global-action-menu/global-action-menu.module';
import { ImageListComponent } from './image-list/image-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartDataProcessButtonModule }
	from '@start-data-process-button/start-data-process-button.module';
import { ThumbnailImageContainerModule }
	from '@thumbnail-image-container/thumbnail-image-container.module';


@NgModule({
	declarations: [
		AllImagesComponent,
		AllImagesPaginationControlsComponent,
		ImageListComponent
	],
	imports: [
		CommonModule,
		GlobalActionMenuModule,
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
			{
				path: '',
				pathMatch: 'full',
				redirectTo: moduleRoutes.defaultRoute
			},

			{path: '**', redirectTo: '/'}
		])
	]
})
export class AllImagesModule {
}
