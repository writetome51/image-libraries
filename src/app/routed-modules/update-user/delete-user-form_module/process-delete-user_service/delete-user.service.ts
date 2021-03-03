import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@services/browser-storage/session-id-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { UpdateUserServicesModule }
	from '@app/routed-modules/update-user/update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class DeleteUserService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async go(): Promise<{ success: true } | HasError> {
		return await this.__realmFn.call('pub_deleteUser', {
			email: currentUser.email,
			password: currentUser.password,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
