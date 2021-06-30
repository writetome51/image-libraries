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


@Injectable({providedIn: 'root'})
export class ReorderLoadedLibraryImagesService implements IDoThis {

	constructor(
		private __loadedImagesState: LoadedImagesStateService,
		private __libPaginator: LibraryPaginatorService
	) {}


	async go(_image_ids) {
		let loadedImages = this.__loadedImagesState.getImages();
		const map = this.__getMappedByID(loadedImages);

		setArray(
			loadedImages,
			getArrFilled(_image_ids.length, (i) => map[_image_ids[i]])
		);
		this.__loadedImagesState.set({
			images: loadedImages,
			from: 'library'
		});
		await this.__syncPaginatorCurrentPageWithCuurentPageImages();
	}


	private __getMappedByID(loadedImages) {
		let map = {};
		for (let i = 0, length = loadedImages.length; i < length; ++i) {
			map[loadedImages[i]._id] = loadedImages[i];
		}
		return map;
	}


	private async __syncPaginatorCurrentPageWithCuurentPageImages() {
		const currentPage = this.__libPaginator.getCurrentPage();
		setArray(currentPage, currentPageImages.data);
	}

}
