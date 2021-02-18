import { ActionMenuButtonModule } from './action-menu-button_module/action-menu-button.module';
import { ActionMenuChoicesModule } from './action-menu-choices_module/action-menu-choices.module';
import { ActionMenuComponent } from './action-menu_component/action-menu.component';
import { CommonModule } from '@angular/common';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [ActionMenuComponent],
	imports: [
		ActionMenuButtonModule,
		ActionMenuChoicesModule,
		CommonModule,
		HoverableContainerModule,
	],
	exports: [ActionMenuComponent]
})
export class ActionMenuModule {
}
