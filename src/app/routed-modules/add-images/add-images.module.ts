import { AddImagesComponent } from './add-images.component';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { BigLoadingSpinnerModule }
	from '@big-loading-spinner/big-loading-spinner.module';
import { ChooseImagesFromDeviceComponent }
	from './choose-images-from-device/choose-images-from-device.component';
import { ClearFormOnInitModule } from '@clear-form-on-init/clear-form-on-init.module';
import { ClearAlertOnDestroyModule } from '@clear-alert-on-destroy/clear-alert-on-destroy.module';
import { CommonModule } from '@angular/common';
import { EnterImageURLComponent } from './enter-image-url/enter-image-url.component';
import { FormsModule } from '@angular/forms';
import { ImageURLFormInputComponent }
	from './enter-image-url/image-url-form-input.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubmitFormButtonModule } from '@submit-form-button/submit-form-button.module';


@NgModule({
	declarations: [
		AddImagesComponent,
		ChooseImagesFromDeviceComponent,
		EnterImageURLComponent,
		ImageURLFormInputComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		BigLoadingSpinnerModule,
		AppValidatingFormInputsModule,
		ClearFormOnInitModule,
		ClearAlertOnDestroyModule,
		SubmitFormButtonModule,
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
