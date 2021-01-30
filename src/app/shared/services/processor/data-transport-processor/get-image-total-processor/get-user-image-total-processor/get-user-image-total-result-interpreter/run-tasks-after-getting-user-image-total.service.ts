import { UserImageTotalInBrowserStorageService }
	from 'encrypted-item-in-browser-storage/user-image-total-in-browser-storage.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingImageTotalService }
	from '../../get-image-total-result-interpreter/run-tasks-after-getting-image-total.service';

@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingUserImageTotalService
	extends RunTasksAfterGettingImageTotalService {

	constructor(__imageTotalInBrowser: UserImageTotalInBrowserStorageService) {
		super(__imageTotalInBrowser);
	}

}
