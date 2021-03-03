import { AddImagesComponent } from './add-images.component';
import { AddImagesServicesModule } from './add-images-services.module';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { BigLoadingSpinnerModule }
	from '@app/shared/modules/big-loading-spinner_module/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { EnterImageURLModule } from './enter-image-url_module/enter-image-url.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UploadImagesFromDeviceComponent }
	from './upload-images-from-device_component/upload-images-from-device.component';


@NgModule({
	declarations: [
		AddImagesComponent,
		UploadImagesFromDeviceComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		BigLoadingSpinnerModule,
		AddImagesServicesModule,
		EnterImageURLModule,
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
