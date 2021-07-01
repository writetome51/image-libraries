import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';
import { getRoundedUp } from '@writetome51/get-rounded-up-down';
import { setArray } from '@writetome51/set-array';
import { LibraryPaginatorService }
	from '@app-paginator/library-paginator_service/library-paginator.service';
import { CurrentPageImagesData as currentPageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { GetEntireLibraryImageIDsReorderedService } from './get-entire-library-image-ids-reordered.service';
import { ImageRecord } from '@interfaces/image-record.interface';


@Injectable({providedIn: 'root'})
export class ReorderLoadedImagesService implements IDoThis {

	constructor(
		private __getEntireLibImageIDsReordered: GetEntireLibraryImageIDsReorderedService,
		private __loadedImagesState: LoadedImagesStateService,
		private __libPaginator: LibraryPaginatorService
	) {}


	async go(entireLibImageIDsInNewOrder: string[]): Promise<void> {

		let loadedImages = this.__loadedImagesState.getImages();
		const imageIDsOfCurrentLoadInNewOrder =
			this.__getImageIDsOfCurrentLoad(entireLibImageIDsInNewOrder, loadedImages.length);

		this.__reorderLoadedImagesToMatchOrderOfImageIDs(
			loadedImages, imageIDsOfCurrentLoadInNewOrder
		);
		await this.__syncPaginatorCurrentPageWithCurrentPageImages();
	}


	private __getImageIDsOfCurrentLoad(_image_ids: string[], numLoadedImages): string[] {
		const pagesPerLoad =
			// must divide evenly.
			this.__libPaginator.getItemsPerLoad() / this.__libPaginator.getItemsPerPage();

		const currentLoadNum =
			getRoundedUp(this.__libPaginator.getCurrentPageNumber() / pagesPerLoad);

		return getAdjacentAt(currentLoadNum - 1, numLoadedImages, _image_ids);
	}


	private __reorderLoadedImagesToMatchOrderOfImageIDs(loadedImages, _image_ids) {
		const map = this.__getMappedByID(loadedImages);

		// This doesnt work b/c _image_ids.length may be greater than loadedImages.length
		setArray(
			loadedImages,
			getArrFilled(_image_ids.length, (i) => map[_image_ids[i]])
		);
		this.__loadedImagesState.set({
			images: loadedImages,
			from: 'library'
		});
	}


	private __getMappedByID(loadedImages) {
		let map = {};
		for (let i = 0, length = loadedImages.length; i < length; ++i) {
			map[loadedImages[i]._id] = loadedImages[i];
		}
		return map;
	}


	private async __syncPaginatorCurrentPageWithCurrentPageImages() {
		const currentPage = this.__libPaginator.getCurrentPage();
		setArray(currentPage, currentPageImages.data);
	}

}
