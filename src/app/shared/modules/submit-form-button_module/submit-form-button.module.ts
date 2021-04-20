import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitFormButtonComponent } from './submit-form-button.component';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button_module/execute-function-button.module';


@NgModule({
	declarations: [SubmitFormButtonComponent],
	imports: [CommonModule, ExecuteFunctionButtonModule],
	exports: [SubmitFormButtonComponent],

	// To suppress unnecessary angular compiler error concerning Components that
	// inherit from abstract Components:
	schemas: [NO_ERRORS_SCHEMA]
})
export class SubmitFormButtonModule {}
