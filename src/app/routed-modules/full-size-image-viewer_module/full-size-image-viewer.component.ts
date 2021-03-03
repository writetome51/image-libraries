import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { DBImage } from '@interfaces/db-image.interface';
import { FullSizeImageViewerModuleTitleData as moduleTitle }
	from './full-size-image-viewer-module-title.data';
import { getByTest } from '@writetome51/array-get-by-test';
import { LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'full-size-image-viewer',
	templateUrl: './full-size-image-viewer.component.html'
})
export class FullSizeImageViewerComponent {

	constructor(
		private __currentRoute: CurrentRouteService,
		private __title: Title
	) {
		this.__title.setTitle(moduleTitle.data);
	}


	getCurrentImage(): DBImage {
		let id = this.__currentRoute.params[paramID.imageID];
		return this.__getImageByID(id);
	}


	private __getImageByID(id): DBImage {

		return getByTest(
			(image: DBImage) => image._id === id,
			loadedImages.data
		)[0]; // result expected to only have one item.
	}

}
