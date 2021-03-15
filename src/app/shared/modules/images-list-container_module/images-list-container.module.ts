import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesListContainerComponent } from './images-list-container.component';
import { GlobalActionMenuModule } from '@global-action-menu_module/global-action-menu.module';
import { ImageSizeSliderModule } from '@image-size-slider_module/image-size-slider.module';
import { AppPaginationControlsModule }
	from '@app-pagination-controls_module/app-pagination-controls.module';


@NgModule({
	declarations: [ImagesListContainerComponent],
	imports: [
		CommonModule,
		GlobalActionMenuModule,
		ImageSizeSliderModule,
		AppPaginationControlsModule
	],
	exports: [ImagesListContainerComponent]
})
export class ImagesListContainerModule {}
