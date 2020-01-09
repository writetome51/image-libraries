import { Component, Input } from '@angular/core';
import { AppImage } from '../../../interfaces/app-image';
import { ImageDisplaySettingsService as imageDisplaySettings }
	from '../../../services/image/image-display-settings.service';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { LoadedLibraryService } from '../../../services/library/loaded-library.service';


@Component({
	selector: 'thumbnail-image',
	templateUrl: './thumbnail-image.component.html'
})
export class ThumbnailImageComponent {


	@Input() image: AppImage;
	@Input() index: number;
	hovered = false;


	constructor(private __loadedLibrary: LoadedLibraryService) {
	}


	get imageWidth(): number {
		return imageDisplaySettings.width;
	}


	deleteImage() {
		removeByIndex(this.index, this.__loadedLibrary.images);
	}


}
