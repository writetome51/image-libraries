import { Component } from '@angular/core';
import { ImageStoreService } from '../services/image-store.service';
import { ImageSettingsService } from '../services/image-settings.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.sass']
})
export class ImageListComponent {

	hovered = -1;

	private __imageWithOptionsVisible = -1; // The index of the image.

	constructor(
		private __imageStore: ImageStoreService,
		private __imageSettings: ImageSettingsService
	) {
	}


	get images(): any[] {
		return this.__imageStore.images;
	}


	get imageWidth(): number {
		return this.__imageSettings.width;
	}


	get imageWithOptionsVisible(): number {
		return this.__imageWithOptionsVisible;
	}


	showOptions(index) {
		this.__imageWithOptionsVisible = index;
	}


	hideOptions() {
		this.__imageWithOptionsVisible = -1;
	}


	set_hovered(index) {
		this.hovered = index;
	}


	unset_hovered() {
		this.hovered = -1;
	}

}
