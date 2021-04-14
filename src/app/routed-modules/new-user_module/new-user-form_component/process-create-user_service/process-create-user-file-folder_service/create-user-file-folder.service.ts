import { AWSStorageService } from '@services/aws-storage.service';
import { EmailInBrowserStorageService } from '@browser-storage/email-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class CreateUserFileFolderService implements IDoThis {

	constructor(
		private __awsStorage: AWSStorageService,
		private __emailInBrowser: EmailInBrowserStorageService
	) {}


	async go(): Promise<{success: true} | HasError> {
		return await this.__awsStorage.createFolder(this.__emailInBrowser.get());
	}

}
