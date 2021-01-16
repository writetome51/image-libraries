import { CheckmarkComponent } from './processable-menu-choice/checkmark.component';
import { ClickStartDataProcessDivModule }
	from '@app/shared/modules/click-start-data-process-div/click-start-data-process-div.module';
import { CommonModule } from '@angular/common';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { MenuChoiceComponent } from './menu-choice.component';
import { NgModule } from '@angular/core';
import { ExecutableMenuChoiceComponent }
	from './processable-menu-choice/executable-menu-choice.component';
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
		ClickStartDataProcessDivModule
	],
	exports: [MenuChoiceComponent]
})
export class MenuChoiceModule {
}
