import { CheckmarkComponent } from './processable-menu-choice/checkmark.component';
import { CommonModule } from '@angular/common';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { MenuChoiceComponent } from './menu-choice.component';
import { NgModule } from '@angular/core';
import { ProcessableMenuChoiceComponent }
	from './processable-menu-choice/processable-menu-choice.component';
import { SubmenuPointerComponent } from './submenu/submenu-pointer.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { StartDataProcessListItemModule }
	from '@start-data-process-list-item/start-data-process-list-item.module';


@NgModule({
	declarations: [
		MenuChoiceComponent,
		CheckmarkComponent,
		ProcessableMenuChoiceComponent,
		SubmenuPointerComponent,
		SubmenuComponent
	],
	imports: [CommonModule, HoverableContainerModule, StartDataProcessListItemModule],
	exports: [MenuChoiceComponent]
})
export class MenuChoiceModule {
}
