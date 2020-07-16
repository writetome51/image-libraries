import { Component } from '@angular/core';
import { CurrentRouteService } from '../services/current-route.service';
import { URLParamIDData as paramID } from '../../data-structures/read-only-data/url-param-id.data';
import { DBImage } from '../../interfaces/db-image';
import { getByTest } from '@writetome51/array-get-by-test';
import { LoadedImagesData as loadedImages }
	from '../../data-structures/runtime-state-data/static-classes/loaded-images.data';


@Component({
	selector: 'full-size-image-viewer',
	templateUrl: './full-size-image-viewer.component.html'
})
export class FullSizeImageViewerComponent {

	constructor(private __currentRoute: CurrentRouteService) {
	}


	getCurrentImage(): DBImage {
		let name = this.__currentRoute.params[paramID.imageName];
		return this.__getImageByName(name);
	}


	private __getImageByName(name): DBImage {
		let foundItem: { value: DBImage, index: number };

		foundItem = getByTest(
			(image: DBImage) => image.name === name,
			loadedImages.data
		)[0]; // result expected to only have one item.

		return foundItem.value;
	}

}
