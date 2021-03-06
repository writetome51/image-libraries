import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { ProcessGetUserImageTotalService }
	from '@process/process-get-user-image-total_service/process-get-user-image-total.service';
import { UserImageTotalInBrowserStorageService }
	from '@browser-storage/user-image-total-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class AssureUserImageTotalStoredLocallyService implements IDoThis {

	constructor(
		private __userImageTotalInBrowser: UserImageTotalInBrowserStorageService,
		private __processGetUserImageTotal: ProcessGetUserImageTotalService
	) {}


	async go() {
		if (this.__userImageTotalStoredLocally()) return;
		else await this.__storeUserImageTotalLocally();
	}


	private __userImageTotalStoredLocally(): boolean {
		let total = this.__userImageTotalInBrowser.get();
		return this.__totalIsValid(total);
	}


	private async __storeUserImageTotalLocally() {
		await this.__processGetUserImageTotal.go();
	}


	private __totalIsValid(total) {
		return ((typeof total === 'number') && Number.isInteger(total) && (total > -1));
	}

}
