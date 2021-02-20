import { AllImagesComponent } from './all-images_component/all-images.component';
import { AllImagesModulePathData as modulePath } from './all-images-module-path.data';
import { AllImagesServicesModule } from './all-images-services.module';
import { AllImagesViewerModule }
	from '@app/routed-modules/all-images/all-images-viewer_module/all-images-viewer.module';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { BigLoadingSpinnerModule } from '@big-loading-spinner/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [AllImagesComponent],
	imports: [
		CommonModule,
		BigLoadingSpinnerModule,
		AllImagesServicesModule,
		AllImagesViewerModule,
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
