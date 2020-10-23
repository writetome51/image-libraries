import { AddImagesComponent } from './add-images.component';
import { AddImageUrlButtonComponent }
	from './enter-image-url/add-image-url-button/add-image-url-button.component';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { BigLoadingSpinnerModule }
	from '@big-loading-spinner/big-loading-spinner.module';
import { ChooseImagesFromDeviceComponent }
	from './choose-images-from-device/choose-images-from-device.component';
import { ClearFormOnInitAndAlertOnDestroyModule }
	from '@clear-form-on-init-and-alert-on-destroy/clear-form-on-init-and-alert-on-destroy.module';
import { CommonModule } from '@angular/common';
import { EnterImageURLComponent } from './enter-image-url/enter-image-url.component';
import { FormsModule } from '@angular/forms';
import { ImageURLFormInputComponent }
	from './enter-image-url/image-url-form-input.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartDataProcessButtonModule }
	from '@start-data-process-button/start-data-process-button.module';


@NgModule({
	declarations: [
		AddImagesComponent,
		AddImageUrlButtonComponent,
		ChooseImagesFromDeviceComponent,
		EnterImageURLComponent,
		ImageURLFormInputComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		BigLoadingSpinnerModule,
		AppValidatingFormInputsModule,
		ClearFormOnInitAndAlertOnDestroyModule,
		StartDataProcessButtonModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: AddImagesComponent,
				canActivate: [AuthenticatedGuard]
			}
		])
	]
})
export class AddImagesModule {
}
