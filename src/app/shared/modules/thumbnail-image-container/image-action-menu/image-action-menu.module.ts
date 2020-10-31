import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageActionMenuComponent } from './image-action-menu.component';
import { ImageActionMenuChoicesManagerService }
	from '@thumbnail-image-container/image-action-menu/image-action-menu-choices-manager.service';
import { ActionMenuModule } from '@action-menu/action-menu.module';
import { ChoiceProcessorsService } from './choice-processors.service';


@NgModule({
	declarations: [ImageActionMenuComponent],
	imports: [
		CommonModule,
		ActionMenuModule
	],
	providers: [ImageActionMenuChoicesManagerService, ChoiceProcessorsService],
	exports: [ImageActionMenuComponent]
})
export class ImageActionMenuModule {
}
