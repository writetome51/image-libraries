import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecuteFunctionButtonComponent } from './execute-function-button.component';
import { TinyLoadingSpinnerModule } from '@tiny-loading-spinner_module/tiny-loading-spinner.module';


@NgModule({
	declarations: [ExecuteFunctionButtonComponent],
	imports: [CommonModule, TinyLoadingSpinnerModule],
	exports: [ExecuteFunctionButtonComponent],

	// To suppress unnecessary angular compiler error concerning Components that
	// inherit from abstract Components:
	// schemas: [NO_ERRORS_SCHEMA]
})
export class ExecuteFunctionButtonModule {}
