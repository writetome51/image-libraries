import { DataTotalService } from '@app-paginator/data-total.abstract.service';
import { Injectable } from '@angular/core';
import { LoadedLibraryImageTotalService }
	from '@services/library/loaded-library-image-total.service';
import { AssureRequestedLibraryStoredLocally }
	from './assure-requested-library-stored-locally.service';


@Injectable({providedIn: 'root'})
export class LibraryImagesDataTotalService extends DataTotalService {

	constructor(
		__storeTotal: AssureRequestedLibraryStoredLocally,
		__storedTotal: LoadedLibraryImageTotalService
	) {
		super(__storeTotal, __storedTotal);
	}

}
