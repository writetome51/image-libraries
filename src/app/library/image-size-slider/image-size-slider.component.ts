import { Component } from '@angular/core';
import { ImageDisplaySettingsService as imageDisplaySettings}
	from '../../services/image/image-display-settings.service';


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
