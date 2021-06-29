import { LibraryRecord } from '@interfaces/library-record.interface';
import { Injectable } from '@angular/core';
import { UpdateLibraryService } from '@db/update-library.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageRecord } from '@interfaces/image-record.interface';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';
import { LibraryPaginatorService }
	from '@app-paginator/library-paginator_service/library-paginator.service';
import { replaceAdjacentAt } from '@writetome51/array-replace-adjacent-at';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';


@Injectable({providedIn: 'root'})
export class ReorderLoadedImagesService implements IDoThis {

	constructor(
		private __loadedImagesState: LoadedImagesStateService,
		private __loadedLibrary: LoadedLibraryInBrowserStorageService,
		private __libPaginator: LibraryPaginatorService
	) {}


	go(_image_ids) {
		let loadedImages = this.__loadedImagesState.getImages();

	}

}
