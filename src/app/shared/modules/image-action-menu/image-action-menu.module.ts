import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageActionMenuComponent } from './image-action-menu.component';
import { ImageActionMenuChoicesManagerService }
	from '@image-action-menu/image-action-menu-choices-manager.service';
import { ActionMenuModule } from '@action-menu/action-menu.module';


@NgModule({
	declarations: [ImageActionMenuComponent],
	imports: [
		CommonModule,
		ActionMenuModule
	],
	providers: [ImageActionMenuChoicesManagerService],
	exports: [ImageActionMenuComponent]
})
export class ImageActionMenuModule {
}
