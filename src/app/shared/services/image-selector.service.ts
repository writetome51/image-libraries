import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { LoadedImagesStateService }
	from '@services/loaded-image-state_service/loaded-images-state.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class ImageSelectorService {

	constructor(private __loadedImagesState: LoadedImagesStateService) {}


	toggleSelect(image: { name: string, _id: string, selected?: boolean }) {
		image.selected ? this.__unSelect(image) : this.__select(image);
	}


	unselectAll() {
		selectedImages.data.length = 0;

		let loadedImages = this.__loadedImagesState.getImages();
		for (let i = 0, length = loadedImages.length; i < length; ++i) {
			delete loadedImages[i]['selected'];
		}
	}


	private __select(image) {
		image['selected'] = true;
		selectedImages.data.push({name: image.name, _id: image._id});
	}


	private __unSelect(image: { _id: string, selected?: boolean }) {
		delete image.selected;
		removeByTest(
			(selectedImg: { _id: string }) => selectedImg._id === image._id,
			selectedImages.data
		);
	}

}
