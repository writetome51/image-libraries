import { LibraryImageTotalInBrowserStorageService }
	from 'encrypted-item-in-browser-storage/library-image-total-in-browser-storage.service';
import { RunTasksAfterGettingImageTotalService }
	from '../../get-image-total-result-interpreter/run-tasks-after-getting-image-total.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingLibraryImageTotalService
	extends RunTasksAfterGettingImageTotalService {

	constructor(__imageTotalInBrowser: LibraryImageTotalInBrowserStorageService) {
		super(__imageTotalInBrowser);
	}

}
