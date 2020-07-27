import { Component } from '@angular/core';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'image-size-slider',
	templateUrl: './image-size-slider.component.html'
})
export class ImageSizeSliderComponent {


	set imageWidth(value) {
		thumbnailDisplaySettings.width = value;
	}


	get imageWidth() {
		return thumbnailDisplaySettings.width;
	}


}
