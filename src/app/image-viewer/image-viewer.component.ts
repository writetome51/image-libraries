import { Component } from '@angular/core';
import { ImageStoreService } from '../services/image-store.service';
import { LibrarySaverService } from '../services/library-saver.service';
import { ImageSettingsService } from '../services/image-settings.service';


@Component({
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {

	fileSavingInfo = `The library is saved to a file you download.  When you save changes, your device 
	downloads a new version.`;

	editMode = false;
	hovered = -1;

	private __imageWithOptionsVisible = -1; // The index of the image.


	constructor(
		private __imageStore: ImageStoreService,
		private __imageSettings:ImageSettingsService,
		private __librarySaver: LibrarySaverService
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


	saveChanges() {
		this.__librarySaver.save();
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
