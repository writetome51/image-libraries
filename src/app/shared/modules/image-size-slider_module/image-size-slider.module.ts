import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSizeSliderComponent } from './image-size-slider.component';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [ImageSizeSliderComponent],
	imports: [CommonModule, FormsModule],
	exports: [ImageSizeSliderComponent]
})
export class ImageSizeSliderModule {}
