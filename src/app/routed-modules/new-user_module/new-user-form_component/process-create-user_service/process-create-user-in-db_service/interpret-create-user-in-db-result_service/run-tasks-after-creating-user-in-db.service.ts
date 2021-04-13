import { UserDBRecord } from '@interfaces/user-db-record.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../../new-user-services.module';
import { TemporaryUserInBrowserStorageService }
	from '@browser-storage/temporary-user-in-browser-storage.service';
import { TemporaryUserData as temporaryUser } from '@runtime-state-data/temporary-user.data';


@Injectable({providedIn: NewUserServicesModule})
export class RunTasksAfterCreatingUserInDbService implements IDoThis {

	constructor(private __tempUserInBrowser: TemporaryUserInBrowserStorageService) {}


	async go(result: UserDBRecord) {
		// for security:
		delete result._id;
		delete result.password;
		delete result.securityQuestion;

		temporaryUser.data = result;
	}

}
