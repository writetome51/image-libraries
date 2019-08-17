import { Component, Input } from '@angular/core';
import { LibraryImage } from '../../../../types/library-image';
import { ImageDisplaySettingsService } from '../../../services/image-display-settings.service';


@Component({
	selector: 'library-image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.sass']
})
export class ImageComponent {


	@Input() image: LibraryImage;
	@Input() index: number;
	hovered = false;


	constructor(private __imageDisplaySettings: ImageDisplaySettingsService) {
	}


	get imageWidth(): number {
		return this.__imageDisplaySettings.width;
	}


}
