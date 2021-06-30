import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { setArray } from '@writetome51/set-array';
import { LibraryPaginatorService }
	from '@app-paginator/library-paginator_service/library-paginator.service';
import { CurrentPageImagesData as currentPageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { GetImageIDsReorderedService } from './get-image-ids-reordered.service';
import { ImageRecord } from '@interfaces/image-record.interface';


@Injectable({providedIn: 'root'})
export class GetLibraryImageIDsReorderedService implements IDoThis {

	constructor(
		private __getImageIDsReordered: GetImageIDsReorderedService,
		private __loadedImagesState: LoadedImagesStateService,
		private __libPaginator: LibraryPaginatorService
	) {}


	async go(pageImagesInNewOrder: ImageRecord[]): Promise<string[]> {
		const pageNum = this.__libPaginator.getCurrentPageNumber();

		//Problem: `_image_ids` contains entire library, which could be more than the current load.
		const _image_ids = this.__getImageIDsReordered.go(pageImagesInNewOrder);
		let loadedImages = this.__loadedImagesState.getImages();

		this.__syncLoadedImagesWithImageIDs(loadedImages, _image_ids);
		await this.__syncPaginatorCurrentPageWithCurrentPageImages();
		return _image_ids;
	}


	private __syncLoadedImagesWithImageIDs(loadedImages, _image_ids) {
		const map = this.__getMappedByID(loadedImages);
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
