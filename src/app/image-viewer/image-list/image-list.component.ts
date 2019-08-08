import { Component } from '@angular/core';
import { ImageDisplaySettingsService } from '../../services/image-display-settings.service';
import { LibraryService } from '../../services/library.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.css']
})
export class ImageListComponent {

	hovered = -1;


	constructor(
		private __library: LibraryService,
		private __imageDisplaySettings: ImageDisplaySettingsService
	) {
	}


	get images(): any[] {
		return this.__library.images;
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
