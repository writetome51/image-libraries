import { Component } from '@angular/core';
import { ImageStoreService } from '../services/image-store.service';
import { JSONFileSaverService } from '../services/jsonfile-saver.service';
import { LibraryProcessorService } from '../services/library-processor.service';


@Component({
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {


	private __imageWithOptionsVisible = -1;


	constructor(
		private __imageStore: ImageStoreService,
		private __jsonFileSaver: JSONFileSaverService,
		private __libraryProcessor: LibraryProcessorService
	) {
	}


	get images(): any[] {
		return this.__imageStore.images;
	}


	get imageWithOptionsVisible(): number {
		return this.__imageWithOptionsVisible;
	}


	get doneProcessing(): boolean {
		return this.__libraryProcessor.doneProcessing;
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
