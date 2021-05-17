import { CheckmarkComponent } from './checkmark.component';
import { ClickExecuteFunctionDivModule }
	from '@click-execute-function-div_module/click-execute-function-div.module';
import { CommonModule } from '@angular/common';
import { ExecutableMenuChoiceComponent } from './executable-menu-choice.component';
import { ExecutableMenuChoiceContextComponent }
	from './executable-menu-choice-context.component';
import { HoverableContainerModule } from '@hoverable-container_module/hoverable-container.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


@NgModule({
	declarations: [
		CheckmarkComponent,
		ExecutableMenuChoiceComponent,
		ExecutableMenuChoiceContextComponent
	],
	imports: [
		CommonModule,
		HoverableContainerModule,
		ClickExecuteFunctionDivModule
	],
	exports: [ExecutableMenuChoiceContextComponent],

	// To suppress unnecessary angular compiler error concerning Components that
	// inherit from abstract Components:
	schemas: [NO_ERRORS_SCHEMA]
})
export class ExecutableMenuChoiceContextModule {}
