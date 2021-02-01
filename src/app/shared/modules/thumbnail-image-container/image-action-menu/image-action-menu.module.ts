import { ActionMenuModule } from '@action-menu/action-menu.module';
import { CommonModule } from '@angular/common';
import { ImageActionMenuComponent } from './image-action-menu.component';
import { GetImageActionMenuChoicesService }
	from './get-image-action-menu-choices.service';
import { ImageActionMenuChoicesExecutorService }
	from './image-action-menu-choices-executor.service';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [ImageActionMenuComponent],
	imports: [
		CommonModule,
		ActionMenuModule
	],
	providers: [
		GetImageActionMenuChoicesService,
		ImageActionMenuChoicesExecutorService
	],
	exports: [ImageActionMenuComponent]
})
export class ImageActionMenuModule {
}
