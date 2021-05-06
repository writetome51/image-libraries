import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { ImageRecord } from '@interfaces/image-record.interface';
import { getByTest } from '@writetome51/array-get-by-test';
import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';
import { Title } from '@angular/platform-browser';
import { LoadedImagesStateService }
	from '@services/loaded-image-state_service/loaded-images-state.service';
import { GetFormattedPageTitleService as getFormattedPageTitle }
	from '@services/get-formatted-page-title.service';
import { appName } from '@string-constants/app-name';


@Component({
	selector: 'full-size-image-viewer',
	templateUrl: './full-size-image-viewer.component.html'
})
export class FullSizeImageViewerComponent {

	constructor(
		private __currentRoute: CurrentRouteService,
		private __title: Title,
		private __loadedImagesState: LoadedImagesStateService
	) {
		this.__title.setTitle(getFormattedPageTitle.go([appName, 'Image']));
	}


	getCurrentImage(): ImageRecord {
		let name = this.__currentRoute.params[paramID.imageName];
		return this.__getImage(name);
	}


	private __getImage(name): ImageRecord {

		return <ImageRecord> getByTest(
			(image: ImageRecord) => image.name === name,
			this.__loadedImagesState.getImages()
		)[0]; // expected to only have one item.
	}

}
