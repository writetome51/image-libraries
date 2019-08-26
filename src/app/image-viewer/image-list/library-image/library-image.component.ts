import { Component, Input } from '@angular/core';
import { LibraryImage } from '../../../../types/library-image';
import { ImageDisplaySettingsService } from '../../../services/image-display-settings.service';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { LibraryService } from '../../../services/library.service';


@Component({
	selector: 'library-image',
	templateUrl: './library-image.component.html',
	styleUrls: ['./library-image.component.sass']
})
export class LibraryImageComponent {


	@Input() image: LibraryImage;
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
