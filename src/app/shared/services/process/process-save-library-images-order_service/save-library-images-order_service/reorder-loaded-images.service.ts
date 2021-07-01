import { CurrentPageImagesData as currentPageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';
import { getRoundedUp } from '@writetome51/get-rounded-up-down';
import { GetLibraryImageIDsReorderedService } from './get-library-image-ids-reordered.service';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageRecord } from '@interfaces/image-record.interface';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';
import { LibraryPaginatorService }
	from '@app-paginator/library-paginator_service/library-paginator.service';
import { setArray } from '@writetome51/set-array';


@Injectable({providedIn: 'root'})
export class ReorderLoadedImagesService implements IDoThis {

	constructor(
		private __getEntireLibImageIDsReordered: GetLibraryImageIDsReorderedService,
		private __loadedImagesState: LoadedImagesStateService,
		private __libPaginator: LibraryPaginatorService
	) {}


	async go(libraryImageIDsInNewOrder: string[]): Promise<void> {

		let loadedImages = this.__loadedImagesState.getImages();
		const imageIDsOfCurrentLoadInNewOrder =
			this.__getImageIDsOfCurrentLoad(libraryImageIDsInNewOrder, loadedImages.length);

		this.__reorderLoadedImagesToMatchOrderOfImageIDs(
			loadedImages, imageIDsOfCurrentLoadInNewOrder
		);
		await this.__syncPaginatorWithCurrentPageImages();
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
		const imagesMappedByID: { [_id: string]: ImageRecord } = __getMappedByID(loadedImages);

		this.__loadedImagesState.set({
			images: getArrFilled(_image_ids.length, (i) => imagesMappedByID[_image_ids[i]]),
			from: 'library'
		});


		function __getMappedByID(loadedImages) {
			let map: { [_id: string]: ImageRecord } = {};
			for (let i = 0, length = loadedImages.length; i < length; ++i) {
				map[loadedImages[i]._id] = loadedImages[i];
			}
			return map;
		}
	}


	private async __syncPaginatorWithCurrentPageImages() {
		const currentPage = this.__libPaginator.getCurrentPage();
		setArray(currentPage, currentPageImages.data);
	}

}
