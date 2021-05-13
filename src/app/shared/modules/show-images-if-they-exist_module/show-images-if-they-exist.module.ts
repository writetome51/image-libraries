import { CommonModule } from '@angular/common';
import { ImagesViewerModule }
	from '@modules/images-viewer_module/images-viewer.module';
import { NgModule } from '@angular/core';
import { ShowImagesIfTheyExistComponent } from './show-images-if-they-exist.component';


@NgModule({
	declarations: [ShowImagesIfTheyExistComponent],
	imports: [
		CommonModule,
		ImagesViewerModule,
	],
	exports: [ShowImagesIfTheyExistComponent]
})
export class ShowImagesIfTheyExistModule {}
