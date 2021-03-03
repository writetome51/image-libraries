import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/db-user.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@services/browser-storage/session-id-in-browser-storage.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class UpdateEmailService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async go(): Promise<DBUser | HasError> {
		return await this.__realmFn.call('pub_updateEmailAndReturnUser', {
			email: currentUser.email,
			password: currentUser.password,
			newEmail: currentUser.newEmail,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
