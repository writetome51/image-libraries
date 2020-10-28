import { AppActionMenuChoicesManagerService } from './app-action-menu-choices-manager.service';
import { AppActionMenuComponent } from './app-action-menu.component';
import { ActionMenuButtonModule } from '../action-menu-button/action-menu-button.module';
import { ActionMenuChoicesModule } from '../action-menu-choices/action-menu-choices.module';
import { CommonModule } from '@angular/common';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [AppActionMenuComponent],
	imports: [
		CommonModule,
		ActionMenuChoicesModule,
		ActionMenuButtonModule,
		HoverableContainerModule,
	],
	providers: [AppActionMenuChoicesManagerService],
	exports: [AppActionMenuComponent]
})
export class AppActionMenuModule {
}
