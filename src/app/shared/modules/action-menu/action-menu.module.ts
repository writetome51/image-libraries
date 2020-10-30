import { ActionMenuButtonModule } from './action-menu-button/action-menu-button.module';
import { ActionMenuChoicesModule } from './action-menu-choices/action-menu-choices.module';
import { ActionMenuComponent } from './action-menu.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';


@NgModule({
	declarations: [ActionMenuComponent],
	imports: [
		CommonModule,
		HoverableContainerModule,
		ActionMenuButtonModule,
		ActionMenuChoicesModule
	],
	exports: [ActionMenuComponent]
})
export class ActionMenuModule {
}
