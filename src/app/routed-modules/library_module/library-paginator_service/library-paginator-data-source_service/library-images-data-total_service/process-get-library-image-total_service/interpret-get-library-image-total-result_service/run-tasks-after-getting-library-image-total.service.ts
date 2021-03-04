import { LibraryImageTotalInBrowserStorageService }
	from '@browser-storage/library-image-total-in-browser-storage.service';
import { RunTasksAfterGettingImageTotalService }
	from '@process-get-image-total/run-tasks-after-getting-image-total.abstract.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingLibraryImageTotalService
	extends RunTasksAfterGettingImageTotalService {

	constructor(__imageTotalInBrowser: LibraryImageTotalInBrowserStorageService) {
		super(__imageTotalInBrowser);
	}

}
