import { CheckmarkComponent }
	from './executable-menu-choice-container_component/checkmark.component';
import { ClickExecuteFunctionDivModule }
	from '@app/shared/modules/click-execute-function-div/click-execute-function-div.module';
import { CommonModule } from '@angular/common';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { MenuChoiceComponent } from './menu-choice.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ExecutableMenuChoiceComponent }
	from './executable-menu-choice-container_component/executable-menu-choice.component';
import { SubmenuComponent } from './submenu_component/submenu.component';
import { SubmenuPointerComponent } from './submenu_component/submenu-pointer.component';
import { ExecutableMenuChoiceContainerComponent }
	from './executable-menu-choice-container_component/executable-menu-choice-container.component';


@NgModule({
	declarations: [
		CheckmarkComponent,
		ExecutableMenuChoiceComponent,
		ExecutableMenuChoiceContainerComponent,
		MenuChoiceComponent,
		SubmenuComponent,
		SubmenuPointerComponent
	],
	imports: [
		CommonModule,
		HoverableContainerModule,
		ClickExecuteFunctionDivModule
	],
	exports: [MenuChoiceComponent],

	// To suppress unnecessary angular compiler error concerning Components that
	// inherit from abstract Components:
	schemas: [NO_ERRORS_SCHEMA]
})
export class MenuChoiceModule {
}
