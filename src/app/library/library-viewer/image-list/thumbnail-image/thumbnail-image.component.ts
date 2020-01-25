import { Component, Input } from '@angular/core';
import { AppImage } from '../../../../interfaces/app-image';
import { ImageDisplaySettingsService as imageDisplaySettings }
	from '../../../../services/image/image-display-settings.service';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { CurrentLibraryData as library } from '../../../../data/current-library.data';


@Component({
	selector: 'thumbnail-image',
	templateUrl: './thumbnail-image.component.html'
})
export class ThumbnailImageComponent {


	@Input() image: AppImage;
	@Input() index: number;
	hovered = false;


	get imageWidth(): number {
		return imageDisplaySettings.width;
	}


	deleteImage() {
		removeByIndex(this.index, library.data.images);
	}


}
