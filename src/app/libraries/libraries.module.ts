import { AllImagesComponent } from '../all-images/all-images.component';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CommonModule } from '@angular/common';
import { CreateLibraryButtonComponent } from './new-library-form/create-library-button.component';
import { FormsModule } from '@angular/forms';
import { LibrariesComponent } from './libraries.component';
import { LibrariesListComponent } from './libraries-list/libraries-list.component';
import { NgModule } from '@angular/core';
import { NewLibraryFormComponent } from './new-library-form/new-library-form.component';
import { NewLibraryFormInputsComponent } from './new-library-form/new-library-form-inputs.component';
import { NewLibraryButtonComponent } from './new-library-button.component';
import { ProcessingButtonModule } from '../processing-button/processing-button.module';
import { RouterModule } from '@angular/router';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';
import { ThumbnailImageModule } from '../thumbnail-image/thumbnail-image.module';
import { LibrariesModuleRouteService as moduleRoute } from './libraries-module-route.service';
import { AddImagesComponent } from './add-images/add-images.component';
import { ChooseImagesFromDeviceComponent }
	from './add-images/choose-images-from-device/choose-images-from-device.component';
import { EnterImageURLComponent } from './add-images/enter-image-url/enter-image-url.component';
import { AddImageUrlButtonComponent }
	from './add-images/enter-image-url/add-image-url-button.component';
import { BigLoadingSpinnerModule } from '../big-loading-spinner/big-loading-spinner.module';
import { AppPaginationControlsModule } from '../app-pagination-controls/app-pagination-controls.module';


@NgModule({
	declarations: [
		AddImageUrlButtonComponent,
		AddImagesComponent,
		ChooseImagesFromDeviceComponent,
		CreateLibraryButtonComponent,
		EnterImageURLComponent,
		LibrariesComponent,
		LibrariesListComponent,
		NewLibraryFormComponent,
		NewLibraryFormInputsComponent,
		NewLibraryButtonComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		BigLoadingSpinnerModule,
		ThumbnailImageModule,
		AppPaginationControlsModule,
		ValidatingInputsModule,
		ProcessingButtonModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: LibrariesComponent,
				canActivate: [AuthenticatedGuard]
			},

			{
				path:  moduleRoute.AllImagesModule,
				loadChildren: () => import('../all-images/all-images.module').then(mod => mod.AllImagesModule)
			},

			{
				path: moduleRoute.AddImagesComponent,
				component: AddImagesComponent,
				canActivate: [AuthenticatedGuard]
			},

			{path: '**', redirectTo: ''}
		])
	]
})
export class LibrariesModule {
}
