import { Component } from '@angular/core';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings }
	from '../../../data-structures/runtime-state-data/static-classes/thumbnail-display-settings.data';
import { ThumbnailDisplayDefaultSettingsData as thumbnailDisplayDefaultSettings }
	from '../../../data-structures/read-only-data/thumbnail-display-default-settings.data';


@Component({
	selector: 'image-size-slider',
	templateUrl: './image-size-slider.component.html'
})
export class ImageSizeSliderComponent {


	set imageWidth(value) {
		thumbnailDisplaySettings.width = value;
	}


	get imageWidth() {
		if (!(thumbnailDisplaySettings.width)) return thumbnailDisplayDefaultSettings.width;
		else return thumbnailDisplaySettings.width;
	}


}
