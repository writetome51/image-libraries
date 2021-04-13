import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { ImageDBRecord } from '@interfaces/image-db-record.interface';
import { FullSizeImageViewerModuleTitleData as moduleTitle }
	from './full-size-image-viewer-module-title.data';
import { getByTest } from '@writetome51/array-get-by-test';
import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';
import { Title } from '@angular/platform-browser';
import { LoadedImageStateService } from '@services/loaded-image-state_service/loaded-image-state.service';


@Component({
	selector: 'full-size-image-viewer',
	templateUrl: './full-size-image-viewer.component.html'
})
export class FullSizeImageViewerComponent {

	constructor(
		private __currentRoute: CurrentRouteService,
		private __title: Title,
		private __loadedImageState: LoadedImageStateService
	) {
		this.__title.setTitle(moduleTitle.data);
	}


	getCurrentImage(): ImageDBRecord {
		let id = this.__currentRoute.params[paramID.imageID];
		return this.__getImageByID(id);
	}


	private __getImageByID(id): ImageDBRecord {

		return getByTest(
			(image: ImageDBRecord) => image._id === id,
			this.__loadedImageState.getLoadedImages()
		)[0]; // result expected to only have one item.
	}

}
