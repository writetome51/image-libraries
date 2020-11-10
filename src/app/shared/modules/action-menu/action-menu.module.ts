import { ActionMenuButtonModule } from './action-menu-button/action-menu-button.module';
import { ActionMenuChoicesModule } from './action-menu-choices/action-menu-choices.module';
import { ActionMenuComponent } from './action-menu.component';
import { CommonModule } from '@angular/common';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { NgModule } from '@angular/core';
import { MenuChoiceProcessorService } from '@action-menu/menu-choice-processor.service';


@NgModule({
	declarations: [ActionMenuComponent],
	imports: [
		ActionMenuButtonModule,
		ActionMenuChoicesModule,
		CommonModule,
		HoverableContainerModule,
	],
	providers: [MenuChoiceProcessorService],
	exports: [ActionMenuComponent]
})
export class ActionMenuModule {
}
