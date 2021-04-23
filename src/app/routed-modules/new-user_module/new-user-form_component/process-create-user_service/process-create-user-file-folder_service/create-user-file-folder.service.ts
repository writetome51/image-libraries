import { EmailInBrowserStorageService } from '@browser-storage/email-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../new-user-services.module';
import { UserFileStorageService } from '@services/user-file-storage.service';


@Injectable({providedIn: NewUserServicesModule})
export class CreateUserFileFolderService implements IDoThis {

	constructor(
		private __userFileStorage: UserFileStorageService,
		private __emailInBrowser: EmailInBrowserStorageService
	) {}


	async go(): Promise<{success: true} | HasError> {
		return this.__userFileStorage.createFolder(this.__emailInBrowser.get());
	}

}
