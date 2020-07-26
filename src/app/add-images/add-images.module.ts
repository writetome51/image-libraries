import { AddImagesComponent } from './add-images.component';
import { AddImageUrlButtonComponent } from './enter-image-url/add-image-url-button.component';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { BigLoadingSpinnerModule }
	from '../shared/modules/big-loading-spinner/big-loading-spinner.module';
import { ChooseImagesFromDeviceComponent }
	from './choose-images-from-device/choose-images-from-device.component';
import { CommonModule } from '@angular/common';
import { ImageURLFormInputComponent }
	from './enter-image-url/image-url-form-input.component';
import { EnterImageURLComponent } from './enter-image-url/enter-image-url.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartDataProcessButtonModule }
	from '../shared/modules/start-data-process-button/start-data-process-button.module';
import { AppValidatingFormInputsModule }
	from '../shared/modules/app-validating-form-inputs/app-validating-form-inputs.module';


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
