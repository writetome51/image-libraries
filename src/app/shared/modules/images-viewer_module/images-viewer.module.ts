import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImagesViewerComponent } from './images-viewer.component';
import { GlobalActionMenuModule } from '@global-action-menu_module/global-action-menu.module';
import { ImageSizeSliderModule } from '@image-size-slider_module/image-size-slider.module';
import { AppPaginationControlsModule }
	from '@app-pagination-controls_module/app-pagination-controls.module';


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
