import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageRecord } from '@interfaces/image-record.interface';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';
import { LibraryPaginatorService }
	from '@app-paginator/library-paginator_service/library-paginator.service';
import { replaceAdjacentAt } from '@writetome51/array-replace-adjacent-at';


@Injectable({providedIn: 'root'})
export class GetImageIDsReorderedService implements IDoThis {

	constructor(
		private __loadedLibrary: LoadedLibraryInBrowserStorageService,
		private __libPaginator: LibraryPaginatorService
	) {}


	go(pageImagesInNewOrder: ImageRecord[]): string[] {
		const lib = this.__loadedLibrary.get();
		return this.__get_image_ids_inNewOrder(pageImagesInNewOrder, lib._image_ids);
	}


	private __get_image_ids_inNewOrder(pageImagesInNewOrder, _image_ids){

		const pageNum = this.__libPaginator.getCurrentPageNumber();

		let page_image_ids = pageImagesInNewOrder.map((image) => image._id);

		this.__replacePage(pageNum, page_image_ids, _image_ids);
		return _image_ids;
	}


	private __replacePage(num, newPage, allPages) {
		const pageSize = this.__libPaginator.getItemsPerPage();

		replaceAdjacentAt(
			pageSize * (num - 1),
			newPage,
			allPages
		);
	}

}
