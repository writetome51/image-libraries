import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@db/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { UpdateUserServicesModule } from '../../../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class DeleteUserRecordService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {}


	async go(email, password): Promise<{ success: true } | HasError> {
		return await this.__realmFn.call('pub_deleteUser', {
			email, password, sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
