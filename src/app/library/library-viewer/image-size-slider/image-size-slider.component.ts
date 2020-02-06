import { Component } from '@angular/core';
import { ThumbnailDisplaySettingsData as imageDisplaySettings }
	from '../../../data/runtime-state-data/thumbnail-display-settings.data';
import { ThumbnailDisplayDefaultSettingsData as thumbnailDisplayDefaultSettings }
	from '../../../data/read-only-data/thumbnail-display-default-settings.data';


@Component({
	selector: 'image-size-slider',
	templateUrl: './image-size-slider.component.html'
})
export class ImageSizeSliderComponent {


	set imageWidth(value) {
		imageDisplaySettings.width = value;
	}


	get imageWidth() {
		if (!(imageDisplaySettings.width)) return thumbnailDisplayDefaultSettings.width;
		else return imageDisplaySettings.width;
	}


}
