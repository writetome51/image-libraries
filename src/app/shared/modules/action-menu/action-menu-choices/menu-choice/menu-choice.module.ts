import { CheckmarkComponent } from './executable-menu-choice/checkmark.component';
import { ClickExecuteFunctionDivModule }
	from '@app/shared/modules/click-execute-function-div/click-execute-function-div.module';
import { CommonModule } from '@angular/common';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { MenuChoiceComponent } from './menu-choice.component';
import { NgModule } from '@angular/core';
import { ExecutableMenuChoiceComponent }
	from './executable-menu-choice/executable-menu-choice.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { SubmenuPointerComponent } from './submenu/submenu-pointer.component';


@NgModule({
	declarations: [
		MenuChoiceComponent,
		CheckmarkComponent,
		ExecutableMenuChoiceComponent,
		SubmenuPointerComponent,
		SubmenuComponent
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
