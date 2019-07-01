import { Component } from '@angular/core';
import { ImageSettingsService } from '../services/image-settings.service';


@Component({
	selector: 'image-size-slider',
	templateUrl: './image-size-slider.component.html'
})
export class ImageSizeSliderComponent {


	constructor(private __imageSettings: ImageSettingsService) {
	}


	set imageWidth(value){
		this.__imageSettings.width = value;
	}


	get imageWidth(){
		return this.__imageSettings.width;
	}


}
