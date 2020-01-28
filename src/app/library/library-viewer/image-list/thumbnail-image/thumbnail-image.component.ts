import { Component, Input } from '@angular/core';
import { AppImage } from '../../../../interfaces/app-image';
import { ImageDisplaySettingsData as imageDisplaySettings }
	from '../../../../data/image-display-settings.data';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { CurrentLibraryData as library } from '../../../../data/current-library.data';
import { LibraryModuleRouteService } from '../../../library-module-route.service';


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


	deleteImage() {
		removeByIndex(this.index, library.data.images);
	}


}
