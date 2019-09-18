import { Component, Input } from '@angular/core';
import { AppImage } from '../../../../interfaces/app-image';
import { ImageDisplaySettingsService } from '../../../services/image/image-display-settings.service';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { LibraryService } from '../../../services/library/library.service';


@Component({
	selector: 'app-image',
	templateUrl: './app-image.component.html'
})
export class AppImageComponent {


	@Input() image: AppImage;
	@Input() index: number;
	hovered = false;


	constructor(
		private __imageDisplaySettings: ImageDisplaySettingsService,
		private __library: LibraryService
	) {
	}


	get imageWidth(): number {
		return this.__imageDisplaySettings.width;
	}


	deleteImage() {
		removeByIndex(this.index, this.__library.images);
	}


}
