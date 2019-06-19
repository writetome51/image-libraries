import { Component } from '@angular/core';
import { ImageStoreService } from '../services/image-store.service';
import { JSONFileSaverService } from '../services/jsonfile-saver.service';


@Component({
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {

	fileSavingInfo = `The library is saved to a file you download.  When you save changes, your device 
	downloads a new version.`;
	imageWidth = 200;

	private __imageWithOptionsVisible = -1; // The index of the image.


	constructor(
		private __imageStore: ImageStoreService,
		private __jsonFileSaver: JSONFileSaverService
	) {
	}


	get images(): any[] {
		return this.__imageStore.images;
	}


	get imageWithOptionsVisible(): number {
		return this.__imageWithOptionsVisible;
	}


	saveChanges() {
		this.__jsonFileSaver.save();
	}


	showOptions(index) {
		this.__imageWithOptionsVisible = index;
	}


	hideOptions() {
		this.__imageWithOptionsVisible = -1;
	}


}
