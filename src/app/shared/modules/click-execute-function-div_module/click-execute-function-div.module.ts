import { CommonModule } from '@angular/common';
import { ClickExecuteFunctionDivComponent } from './click-execute-function-div.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TinyLoadingSpinnerModule } from '@tiny-loading-spinner_module/tiny-loading-spinner.module';


@NgModule({
	declarations: [ClickExecuteFunctionDivComponent],
	imports: [CommonModule, TinyLoadingSpinnerModule],
	exports: [ClickExecuteFunctionDivComponent],

	// To suppress unnecessary angular compiler error concerning Components that
	// inherit from abstract Components:
	schemas: [NO_ERRORS_SCHEMA]
})
export class ClickExecuteFunctionDivModule {}
