import { AppPaginationControlsModule } from '@app-pagination-controls/app-pagination-controls.module';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { BigLoadingSpinnerModule } from '@big-loading-spinner/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibrariesComponent } from './libraries.component';
import { LibrariesListComponent } from './libraries-list/libraries-list.component';
import { NgModule } from '@angular/core';
import { NewLibraryButtonComponent } from './new-library-button.component';
import { StartDataProcessButtonModule }
	from '@start-data-process-button/start-data-process-button.module';
import { RouterModule } from '@angular/router';
import { ThumbnailImageContainerModule }
	from '@thumbnail-image-container/thumbnail-image-container.module';
import { NewLibraryFormModule } from './new-library-form/new-library-form.module';
import { ClearFormOnInitAndAlertOnDestroyContainerModule } // tslint:disable-next-line:max-line-length
	from '@clear-form-on-init-and-alert-on-destroy-container/clear-form-on-init-and-alert-on-destroy-container.module';


@NgModule({
	declarations: [
		LibrariesComponent,
		LibrariesListComponent,
		NewLibraryButtonComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		BigLoadingSpinnerModule,
		ClearFormOnInitAndAlertOnDestroyContainerModule,
		NewLibraryFormModule,
		ThumbnailImageContainerModule,
		AppPaginationControlsModule,
		AppValidatingFormInputsModule,
		StartDataProcessButtonModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: LibrariesComponent,
				canActivate: [AuthenticatedGuard]
			},

			{path: '**', redirectTo: ''}
		])
	]
})
export class LibrariesModule {
}
