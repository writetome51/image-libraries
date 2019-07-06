import { Component } from '@angular/core';
import { ImageDisplaySettingsService } from '../../services/image-display-settings.service';


@Component({
	selector: 'image-size-slider',
	templateUrl: './image-size-slider.component.html'
})
export class ImageSizeSliderComponent {


	constructor(private __imageSettings: ImageDisplaySettingsService) {
	}


	set imageWidth(value){
		this.__imageSettings.width = value;
	}


	get imageWidth(){
		return this.__imageSettings.width;
	}


}
