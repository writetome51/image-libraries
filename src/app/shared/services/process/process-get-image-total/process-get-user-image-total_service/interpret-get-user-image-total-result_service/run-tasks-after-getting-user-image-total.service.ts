import { UserImageTotalInBrowserStorageService }
	from '@browser-storage/user-image-total-in-browser-storage.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingImageTotalService }
	from '../../run-tasks-after-getting-image-total.abstract.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingUserImageTotalService
	extends RunTasksAfterGettingImageTotalService {

	constructor(__imageTotalInBrowser: UserImageTotalInBrowserStorageService) {
		super(__imageTotalInBrowser);
	}

}
