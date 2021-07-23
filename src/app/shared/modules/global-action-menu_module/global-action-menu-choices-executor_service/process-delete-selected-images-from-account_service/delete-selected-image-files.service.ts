import { EmailInBrowserStorageService } from '@browser-storage/email-in-browser-storage.service';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu_module/global-action-menu-services.module';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { UserFileStorageService }
	from '@services/user-file-storage_service/user-file-storage.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class DeleteSelectedImageFilesService implements IDoThis {

	constructor(
		private __userFileStorage: UserFileStorageService,
		private __emailInBrowser: EmailInBrowserStorageService
	) {}


	async go(fileNames: string[]): Promise<{ success: true } | HasError> {

		// If any of `fileNames` was not uploaded by user but added only as a URL, this will still
		// execute without error.
		return this.__userFileStorage.deleteUserFiles(fileNames, this.__emailInBrowser.get());
	}

}
