import { CheckmarkComponent } from './checkmark.component';
import { ClickExecuteFunctionDivModule }
	from '@click-execute-function-div_module/click-execute-function-div.module';
import { CommonModule } from '@angular/common';
import { ExecutableMenuChoiceComponent } from './executable-menu-choice.component';
import { ExecutableMenuChoiceContainerComponent }
	from './executable-menu-choice-container.component';
import { HoverableContainerModule } from '@hoverable-container_module/hoverable-container.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


@NgModule({
	declarations: [
		CheckmarkComponent,
		ExecutableMenuChoiceComponent,
		ExecutableMenuChoiceContainerComponent
	],
	imports: [
		CommonModule,
		HoverableContainerModule,
		ClickExecuteFunctionDivModule
	],
	exports: [ExecutableMenuChoiceContainerComponent],

	// To suppress unnecessary angular compiler error concerning Components that
	// inherit from abstract Components:
	schemas: [NO_ERRORS_SCHEMA]
})
export class ExecutableMenuChoiceContainerModule {}
