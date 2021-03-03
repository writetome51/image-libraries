import { IDoThis } from '@interfaces/i-do-this.interface';
import { UserImageTotalInBrowserStorageService }
	from '@services/browser-storage-related/user-image-total-in-browser-storage.service';
import { LibraryImageTotalInBrowserStorageService }
	from '@services/browser-storage-related/library-image-total-in-browser-storage.service';


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
