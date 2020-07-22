import { AppPaginationControlsModule }
	from '../shared/modules/app-pagination-controls/app-pagination-controls.module';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { BigLoadingSpinnerModule }
	from '../shared/modules/big-loading-spinner/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { CreateLibraryButtonComponent }
	from './new-library-form/create-library-button/create-library-button.component';
import { FormsModule } from '@angular/forms';
import { LibrariesComponent } from './libraries.component';
import { LibrariesListComponent } from './libraries-list/libraries-list.component';
import { NgModule } from '@angular/core';
import { NewLibraryFormComponent } from './new-library-form/new-library-form.component';
import { NewLibraryFormInputsComponent } from './new-library-form/new-library-form-inputs.component';
import { NewLibraryButtonComponent } from './new-library-button.component';
import { StartDataProcessButtonModule }
	from '../shared/modules/start-data-process-button/start-data-process-button.module';
import { RouterModule } from '@angular/router';
import { ThumbnailImageContainerModule }
	from '../shared/modules/thumbnail-image-container/thumbnail-image-container.module';
import { ValidatingInputsModule } from '../shared/modules/validating-inputs/validating-inputs.module';


@NgModule({
	declarations: [
		CreateLibraryButtonComponent,
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
		ThumbnailImageContainerModule,
		AppPaginationControlsModule,
		ValidatingInputsModule,
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
