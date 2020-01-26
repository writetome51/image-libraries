import { Component } from '@angular/core';
import { ImageDisplaySettingsData as imageDisplaySettings}
	from '../../../data/image-display-settings.data';


@Component({
	selector: 'image-size-slider',
	templateUrl: './image-size-slider.component.html'
})
export class ImageSizeSliderComponent {


	set imageWidth(value){
		imageDisplaySettings.width = value;
	}


	get imageWidth(){
		return imageDisplaySettings.width;
	}


}
