import { AppPaginationControlsModule }
	from '@app-pagination-controls_module/app-pagination-controls.module';
import { CommonModule } from '@angular/common';
import { GlobalActionMenuModule } from '@global-action-menu_module/global-action-menu.module';
import { ImagesViewerComponent } from './images-viewer.component';
import { ImageSizeSliderModule } from '@image-size-slider_module/image-size-slider.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [ImagesViewerComponent],
	imports: [
		CommonModule,
		GlobalActionMenuModule,
		ImageSizeSliderModule,
		AppPaginationControlsModule
	],
	exports: [ImagesViewerComponent]
})
export class ImagesViewerModule {}
