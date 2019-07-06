import { Component } from '@angular/core';
import { ImageStoreService } from '../../services/image-store.service';
import { ImageDisplaySettingsService } from '../../services/image-display-settings.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.css']
})
export class ImageListComponent {

	hovered = -1;


	constructor(
		private __imageStore: ImageStoreService,
		private __imageDisplaySettings: ImageDisplaySettingsService
	) {
	}


	get images(): any[] {
		return this.__imageStore.images;
	}


	get imageWidth(): number {
		return this.__imageDisplaySettings.width;
	}


	set_hovered(index) {
		this.hovered = index;
	}


	unset_hovered() {
		this.hovered = -1;
	}

}
