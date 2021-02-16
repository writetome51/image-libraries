import { AddImagesComponent } from './add-images_component/add-images.component';
import { AddImagesServicesModule } from './add-images-services.module';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { BigLoadingSpinnerModule }
	from '@big-loading-spinner/big-loading-spinner.module';
import { ChooseImagesFromDeviceComponent }
	from './choose-images-from-device_component/choose-images-from-device.component';
import { ClearFormOnInitModule } from '@clear-form-on-init/clear-form-on-init.module';
import { ClearAlertOnDestroyModule } from '@clear-alert-on-destroy/clear-alert-on-destroy.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubmitFormButtonModule } from '@submit-form-button/submit-form-button.module';
import { EnterImageURLModule } from './enter-image-url_module/enter-image-url.module';


@NgModule({
	declarations: [
		AddImagesComponent,
		ChooseImagesFromDeviceComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		BigLoadingSpinnerModule,
		AppValidatingFormInputsModule,
		AddImagesServicesModule,
		EnterImageURLModule,
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
