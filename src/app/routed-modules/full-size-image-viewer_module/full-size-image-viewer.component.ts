import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { ImageRecord } from '@interfaces/image-record.interface';
import { getByTest } from '@writetome51/array-get-by-test';
import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';
import { Title } from '@angular/platform-browser';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';


@Component({
	selector: 'full-size-image-viewer',
	template: `
		<!--
		This will be a full-page view of a selected image.
		Here you'll be able to add/remove tags, add/change image name, date, description, location.
		-->
		<full-size-image [data]="getCurrentImage()"></full-size-image>

		<image-name></image-name>

		<belongs-to-libraries [image]="getCurrentImage()"></belongs-to-libraries>
	`
})
export class FullSizeImageViewerComponent {

	constructor(
		private __currentRoute: CurrentRouteService,
		private __title: Title,
		private __loadedImagesState: LoadedImagesStateService
	) {
		this.__title.setTitle(getPageTitle.go(['Image']));
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
