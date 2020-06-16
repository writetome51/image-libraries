import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BigLoadingSpinnerModule } from '../big-loading-spinner/big-loading-spinner.module';
import { AddImagesComponent } from './add-images.component';
import { EnterImageURLComponent } from './enter-image-url/enter-image-url.component';
import { AddImageUrlButtonComponent } from './enter-image-url/add-image-url-button.component';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';
import { StartDataProcessButtonModule }
	from '../start-data-process-button/start-data-process-button.module';
import { RouterModule } from '@angular/router';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { ChooseImagesFromDeviceComponent }
	from './choose-images-from-device/choose-images-from-device.component';


@NgModule({
	declarations: [
		AddImagesComponent,
		EnterImageURLComponent,
		AddImageUrlButtonComponent,
		ChooseImagesFromDeviceComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		BigLoadingSpinnerModule,
		ValidatingInputsModule,
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
