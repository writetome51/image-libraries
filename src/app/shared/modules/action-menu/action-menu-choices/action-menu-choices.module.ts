import { ActionMenuChoicesComponent } from './action-menu-choices.component';
import { CommonModule } from '@angular/common';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { MenuChoiceComponent } from './menu-choice/menu-choice.component';
import { MenuChoiceProcessorService }
	from './menu-choice/menu-choice-processor.service';
import { NgModule } from '@angular/core';
import { StartDataProcessListItemModule }
	from '@start-data-process-list-item/start-data-process-list-item.module';
import { SubmenuPointerComponent } from './menu-choice/submenu/submenu-pointer.component';
import { SubmenuComponent } from './menu-choice/submenu/submenu.component';


@NgModule({
	declarations: [
		ActionMenuChoicesComponent,
		MenuChoiceComponent,
		SubmenuPointerComponent,
		SubmenuComponent
	],
	imports: [CommonModule, StartDataProcessListItemModule, HoverableContainerModule],
	providers: [MenuChoiceProcessorService],
	exports: [ActionMenuChoicesComponent]
})
export class ActionMenuChoicesModule {
}
