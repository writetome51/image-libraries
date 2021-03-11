import { CommonModule } from '@angular/common';
import { ExecutableMenuChoiceContainerModule }
	from './executable-menu-choice-container_module/executable-menu-choice-container.module';
import { HoverableContainerModule } from '@hoverable-container_module/hoverable-container.module';
import { MenuChoiceComponent } from './menu-choice.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SubmenuComponent } from './submenu_component/submenu.component';
import { SubmenuPointerComponent } from './submenu_component/submenu-pointer.component';


@NgModule({
	declarations: [
		MenuChoiceComponent,
		SubmenuComponent,
		SubmenuPointerComponent
	],
	imports: [
		CommonModule,
		HoverableContainerModule,
		ExecutableMenuChoiceContainerModule
	],
	exports: [MenuChoiceComponent],

	// To suppress unnecessary angular compiler error concerning Components that
	// inherit from abstract Components:
	schemas: [NO_ERRORS_SCHEMA]
})
export class MenuChoiceModule {}
