import { AllImagesComponent } from './all-images.component';
import { AllImagesModulePathData as modulePath } from './all-images-module-path.data';
import { AllImagesPaginationControlsComponent } from './all-images-pagination-controls.component';
import { AppPaginationControlsModule }
	from '@app-pagination-controls/app-pagination-controls.module';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { BigLoadingSpinnerModule } from '@big-loading-spinner/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { GlobalActionMenuModule } from '@global-action-menu/global-action-menu.module';
import { ImageListComponent } from './image-list/image-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
		ThumbnailImageContainerModule,
		RouterModule.forChild([
			{
				path: modulePath.AllImagesComponent,
				component: AllImagesComponent,
				canActivate: [AuthenticatedGuard]
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: modulePath.defaultPath
			},

			{path: '**', redirectTo: '/'}
		])
	]
})
export class AllImagesModule {
}
