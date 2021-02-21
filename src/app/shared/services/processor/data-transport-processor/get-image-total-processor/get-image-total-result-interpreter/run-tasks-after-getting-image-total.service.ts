import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';
import { UserImageTotalInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/user-image-total-in-browser-storage.service';
import { LibraryImageTotalInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/library-image-total-in-browser-storage.service';


export abstract class RunTasksAfterGettingImageTotalService implements IDoThis {

	constructor(
		private __imageTotalInBrowser:
			UserImageTotalInBrowserStorageService | LibraryImageTotalInBrowserStorageService
	) {
	}


	async go(result: { dataTotal: number }) {
		this.__imageTotalInBrowser.set(result.dataTotal);
	}

}
