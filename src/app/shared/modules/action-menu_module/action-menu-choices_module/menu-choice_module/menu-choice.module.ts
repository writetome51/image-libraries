import { CommonModule } from '@angular/common';
import { ExecutableMenuChoiceContextModule }
	from './executable-menu-choice-context_module/executable-menu-choice-context.module';
import { HoverableContainerModule } from '@hoverable-container_module/hoverable-container.module';
import { MenuChoiceComponent } from './menu-choice.component';
import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
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
		ExecutableMenuChoiceContextModule
	],
	exports: [MenuChoiceComponent],

	// To suppress unnecessary angular compiler error concerning Components that
	// inherit from abstract Components:
	schemas: [NO_ERRORS_SCHEMA]
})
export class MenuChoiceModule {}
