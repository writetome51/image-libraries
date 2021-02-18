import { CheckmarkComponent } from './executable-menu-choice-container_component/checkmark.component';
import { ClickExecuteFunctionDivModule }
	from '@app/shared/modules/click-execute-function-div/click-execute-function-div.module';
import { CommonModule } from '@angular/common';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { MenuChoiceComponent } from './menu-choice_component/menu-choice.component';
import { NgModule } from '@angular/core';
import { ExecutableMenuChoiceComponent }
	from './executable-menu-choice-container_component/executable-menu-choice.component';
import { SubmenuComponent } from './submenu_component/submenu.component';
import { SubmenuPointerComponent } from './submenu_component/submenu-pointer.component';
import { ExecutableMenuChoiceContainerComponent }
	from './executable-menu-choice-container_component/executable-menu-choice-container.component';
import { AbstractMenuChoiceComponent } from '@action-menu/action-menu-choices_module/menu-choice_module/abstract-menu-choice.component';
import { LabelledMenuChoiceComponent } from '@action-menu/action-menu-choices_module/menu-choice_module/labelled-menu-choice.component';


@NgModule({
	declarations: [
		AbstractMenuChoiceComponent,
		LabelledMenuChoiceComponent,
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
	exports: [MenuChoiceComponent]
})
export class MenuChoiceModule {
}
