import { CommonModule } from '@angular/common';
import { DeleteLibraryButtonComponent } from './delete-library-button.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button_module/execute-function-button.module';
import { DeleteLibraryButtonServicesModule } from './delete-library-button-services.module';


@NgModule({
	declarations: [DeleteLibraryButtonComponent],
	imports: [
		CommonModule,
		ExecuteFunctionButtonModule,
		DeleteLibraryButtonServicesModule
	],
	exports: [DeleteLibraryButtonComponent],

	// To suppress unnecessary angular compiler error concerning Components that
	// inherit from abstract Components:
	schemas: [NO_ERRORS_SCHEMA]
})
export class DeleteLibraryButtonModule {}
