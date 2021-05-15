import { AllImagesComponent } from './all-images.component';
import { AllImagesModulePathData as modulePath } from './all-images-module-path.data';
import { AllImagesServicesModule } from './all-images-services.module';
import { AllImagesViewerModule } from './all-images-viewer_module/all-images-viewer.module';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { CommonModule } from '@angular/common';
import { LoadingContentSectionModule } from '@modules/loading-content-section_module/loading-content-section.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [AllImagesComponent],
	imports: [
		LoadingContentSectionModule,
		AllImagesViewerModule,
		AllImagesServicesModule,
		CommonModule,
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
export class AllImagesModule {}
