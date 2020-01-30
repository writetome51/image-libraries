import { Component, Input } from '@angular/core';
import { AppImage } from '../../../../interfaces/app-image';
import { ImageDisplaySettingsData as imageDisplaySettings }
	from '../../../../data/image-display-settings.data';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { LibraryModuleRouteService } from '../../../library-module-route.service';
import { ImagesToDisplayService } from '../../../../services/image/images-to-display.service';


@Component({
	selector: 'thumbnail-image',
	templateUrl: './thumbnail-image.component.html'
})
export class ThumbnailImageComponent {


	@Input() image: AppImage;
	@Input() index: number;
	hovered = false;
	moduleRoute = LibraryModuleRouteService;


	get imageWidth(): number {
		return imageDisplaySettings.width;
	}


	get imageRoute(): string {
		return `image/${this.index}`;
	}


	constructor(private __imagesToDisplay: ImagesToDisplayService) {
	}


	deleteImage() {
		removeByIndex(this.index, this.__imagesToDisplay.data);
	}


}
