import { AppPaginationControlsModule } from '@app-pagination-controls/app-pagination-controls.module';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { BigLoadingSpinnerModule } from '@big-loading-spinner/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NewLibraryFormComponent } from './new-library-form.component';
import { NewLibraryFormInputComponent } from './new-library-form-input.component';
import { StartDataProcessButtonModule }
	from '@start-data-process-button/start-data-process-button.module';
import { CreateLibraryButtonComponent }
	from './create-library-button/create-library-button.component';


@NgModule({
	declarations: [
		CreateLibraryButtonComponent,
		NewLibraryFormComponent,
		NewLibraryFormInputComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		BigLoadingSpinnerModule,
		AppPaginationControlsModule,
		AppValidatingFormInputsModule,
		StartDataProcessButtonModule,
	],
	exports: [NewLibraryFormComponent]
})
export class NewLibraryFormModule {
}
