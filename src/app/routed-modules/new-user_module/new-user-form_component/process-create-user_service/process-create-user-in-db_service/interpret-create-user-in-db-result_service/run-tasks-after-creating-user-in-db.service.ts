import { DBUser } from '@interfaces/db-user.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../../new-user-services.module';
import { TemporaryUserInBrowserStorageService }
	from '@browser-storage/temporary-user-in-browser-storage.service';


@Injectable({providedIn: NewUserServicesModule})
export class RunTasksAfterCreatingUserInDbService implements IDoThis {

	constructor(private __tempUserInBrowser: TemporaryUserInBrowserStorageService) {}


	async go(result: DBUser) {
		// for security:
		delete result._id;
		delete result.password;

		await this.__tempUserInBrowser.set(result);
	}

}
