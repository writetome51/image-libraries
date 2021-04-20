import { EmailInBrowserStorageService } from '@browser-storage/email-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../new-user-services.module';
import { not } from '@writetome51/not';
import { noValue } from '@writetome51/has-value-no-value';
import { ProcessCreateUserInDbService }
	from './process-create-user-in-db_service/process-create-user-in-db.service';
import { ProcessCreateUserFileFolderService }
	from './process-create-user-file-folder_service/process-create-user-file-folder.service';
import { TemporaryUserData as temporaryUser } from '@runtime-state-data/temporary-user.data';


@Injectable({providedIn: NewUserServicesModule})
export class CreateUserService implements IDoThis {

	constructor(
		private __processCreateUserInDb: ProcessCreateUserInDbService,
		private __processCreateUserFileFolder: ProcessCreateUserFileFolderService,
		private __emailInBrowser: EmailInBrowserStorageService
	) {}


	async go(): Promise<{ success: true } | HasError> {
		await this.__processCreateUserInDb.go();
		await this.__processCreateUserFileFolder.go();

		if (noValue(this.__emailInBrowser.get()) || not(temporaryUser.data.fileFolderCreated)) {
			return {error: {message: 'Creation of new user unsuccessful'}};
		}
		else return {success: true};
	}

}
