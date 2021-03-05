import { Injectable } from '@angular/core';
import { UserImageTotalInBrowserStorageService }
	from '@browser-storage/user-image-total-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingUserImageTotalService {

	constructor(private __imageTotal: UserImageTotalInBrowserStorageService) {
	}


	go(result: { dataTotal: number }) {
		this.__imageTotal.set(result.dataTotal);
	}

}
