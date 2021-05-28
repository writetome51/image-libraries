import { LoadedImagesStateService }
	from '@services/loaded-image-state_service/loaded-images-state.service';
import { Injectable } from '@angular/core';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { Subject, Subscribable } from 'rxjs';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})
export class ImageSelectorService {

	private __subject = new Subject();

	get selectionState$(): Subscribable<{ imagesSelected: boolean }> {
		return this.__subject;
	}


	constructor(private __loadedImagesState: LoadedImagesStateService) {}


	toggleSelect(image: { name: string, _id: string, selected?: boolean }): void {
		image.selected ? this.__unSelect(image) : this.__select(image);
	}


	unselectAll(): void {
		selectedImages.data.length = 0;
		this.__removeSelectedPropertyFromAllLoadedImages();
		this.__subject.next({imagesSelected: false});
	}


	private __select(image) {
		this.__afterAction_sendMessageToSubscribersIfSelectedOrNot(() => {
			image['selected'] = true;
			selectedImages.data.push({name: image.name, _id: image._id});
		});
	}


	private __unSelect(image: { _id: string, selected?: boolean }) {
		this.__afterAction_sendMessageToSubscribersIfSelectedOrNot(
			() => {
				delete image.selected;
				removeByTest(
					(selectedImg: { _id: string }) => selectedImg._id === image._id,
					selectedImages.data
				);
			},
			{selecting: false}
		);
	}


	private __afterAction_sendMessageToSubscribersIfSelectedOrNot(
		action, option = {selecting: true},
	) {
		const previousLength = selectedImages.data.length;
		action();

		// We want to only send a message if 'imagesSelected' is changing from true
		// to false or from false to true.

		if ( (option.selecting && previousLength === 0) ||
			(not(option.selecting) && previousLength === 1) ) {
			this.__subject.next({imagesSelected: previousLength === 0});
		}
	}


	private __removeSelectedPropertyFromAllLoadedImages() {
		let loadedImages = this.__loadedImagesState.getImages();

		for (let i = 0, length = loadedImages.length; i < length; ++i) {
			delete loadedImages[i]['selected'];
		}
	}

}
