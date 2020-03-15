import { AllImagesComponent } from './all-images.component';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';
import { ThumbnailImageModule } from '../thumbnail-image/thumbnail-image.module';
import { BigLoadingSpinnerModule } from '../big-loading-spinner/big-loading-spinner.module';
import { AppPaginationControlsModule } from '../app-pagination-controls/app-pagination-controls.module';


@NgModule({
	declarations: [AllImagesComponent],
	imports: [
		CommonModule,
		BigLoadingSpinnerModule,
		ThumbnailImageModule,
		AppPaginationControlsModule,
		ValidatingInputsModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: AllImagesComponent,
				canActivate: [AuthenticatedGuard]
			},

			{path: '**', redirectTo: ''}
		])
	]
})
export class AllImagesModule {
}
