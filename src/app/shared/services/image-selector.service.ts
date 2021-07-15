import { Injectable } from '@angular/core';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';
import { Subject, Subscribable } from 'rxjs';
import { CurrentPageImagesData as currentPageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: 'root'})
export class ImageSelectorService {

	private __subject = new Subject();
	private __selectionCount = 0;

	get selectionState$(): Subscribable<{ imagesSelected: boolean }> {
		return this.__subject;
	}


	constructor(private __loadedImagesState: LoadedImagesStateService) {}


	toggleSelect(image: { name: string, _id: string, selected?: boolean }): void {
		image.selected ? this.__unSelect(image) : this.__select(image);
	}


	selectAll(): void {
		this.__afterAction_sendMessageToSubscribersIfSelectionStateChanged(() => {
			this.__selectionCount = currentPageImages.data.length;

			for (let i = 0, length = currentPageImages.data.length; i < length; ++i) {
				currentPageImages.data[i]['selected'] = true;
			}
		});
	}


	unselectAll(): void {
		this.__selectionCount = 0;
		this.__removeSelectedPropertyFromAllCurrentPageImages();
		this.__subject.next({imagesSelected: false});
	}


	private __select(image) {
		this.__afterAction_sendMessageToSubscribersIfSelectionStateChanged(() => {
			image['selected'] = true;
			++this.__selectionCount;
		});
	}


	private __unSelect(image: { _id: string, selected?: boolean }) {
		this.__afterAction_sendMessageToSubscribersIfSelectionStateChanged(() => {
			delete image['selected'];
			--this.__selectionCount;
		});
	}


	private __afterAction_sendMessageToSubscribersIfSelectionStateChanged(action) {
		const previousCount = this.__selectionCount;
		action();
		const currentCount = this.__selectionCount;

		// We want to only send a message if 'imagesSelected' is changing from true
		// to false or from false to true.

		if ( (currentCount === 1 && previousCount === 0) ||
			(currentCount === 0 && previousCount === 1) ) {
			this.__subject.next({imagesSelected: previousCount === 0});
		}
	}


	private __removeSelectedPropertyFromAllCurrentPageImages() {

		for (let i = 0, length = currentPageImages.data.length; i < length; ++i) {
			delete currentPageImages.data[i]['selected'];
		}
	}

}
