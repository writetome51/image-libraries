import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageActionMenuComponent } from './image-action-menu.component';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { ActionMenuButtonModule }
	from '@app/shared/modules/action-menu-button/action-menu-button.module';
import { ActionMenuChoicesModule }
	from '@app/shared/modules/action-menu-choices/action-menu-choices.module';
import { ImageActionMenuChoicesManagerService }
	from '@image-action-menu/image-action-menu-choices-manager.service';


@NgModule({
	declarations: [ImageActionMenuComponent],
	imports: [
		CommonModule,
		HoverableContainerModule,
		ActionMenuButtonModule,
		ActionMenuChoicesModule
	],
	providers: [ImageActionMenuChoicesManagerService],
	exports: [ImageActionMenuComponent]
})
export class ImageActionMenuModule {
}
