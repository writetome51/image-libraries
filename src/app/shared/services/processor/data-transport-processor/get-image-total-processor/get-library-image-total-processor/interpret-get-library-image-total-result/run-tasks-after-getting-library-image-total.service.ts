import { LibraryImageTotalInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/library-image-total-in-browser-storage.service';
import { RunTasksAfterGettingImageTotalService }
	from '../../interpret-get-image-total-result/run-tasks-after-getting-image-total.abstract.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingLibraryImageTotalService
	extends RunTasksAfterGettingImageTotalService {

	constructor(__imageTotalInBrowser: LibraryImageTotalInBrowserStorageService) {
		super(__imageTotalInBrowser);
	}

}
