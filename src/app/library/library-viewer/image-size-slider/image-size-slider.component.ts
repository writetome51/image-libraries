import { Component } from '@angular/core';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings }
	// tslint:disable-next-line:max-line-length
	from '../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/thumbnail-display-settings.data';


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
