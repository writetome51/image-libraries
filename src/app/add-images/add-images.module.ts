import { AddImagesComponent } from './add-images.component';
import { AddImageUrlButtonComponent } from './enter-image-url/add-image-url-button.component';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { BigLoadingSpinnerModule } from '../big-loading-spinner/big-loading-spinner.module';
import { ChooseImagesFromDeviceComponent }
	from './choose-images-from-device/choose-images-from-device.component';
import { CommonModule } from '@angular/common';
import { EnterImageURLComponent } from './enter-image-url/enter-image-url.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartDataProcessButtonModule }
	from '../start-data-process-button/start-data-process-button.module';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';



@NgModule({
	declarations: [
		AddImagesComponent,
		AddImageUrlButtonComponent,
		ChooseImagesFromDeviceComponent,
		EnterImageURLComponent,
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
