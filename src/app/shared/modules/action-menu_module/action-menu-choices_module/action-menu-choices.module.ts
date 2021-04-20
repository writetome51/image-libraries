import { ActionMenuChoicesComponent } from './action-menu-choices.component';
import { CommonModule } from '@angular/common';
import { MenuChoiceModule } from './menu-choice_module/menu-choice.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


@NgModule({
	declarations: [ActionMenuChoicesComponent],
	imports: [CommonModule, MenuChoiceModule],
	exports: [ActionMenuChoicesComponent],
	// schemas: [NO_ERRORS_SCHEMA]
})
export class ActionMenuChoicesModule {}
