import { CurrentUserFormData as currentUserForm }
	from '@runtime-state-data/static-classes/current-user-form.data';
import { UserRecord } from '@interfaces/user-record.interface';
import { EmailInBrowserStorageService } from '@browser-storage/email-in-browser-storage.service';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class UpdatePasswordService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __emailInBrowser: EmailInBrowserStorageService
	) {}


	async go(): Promise<UserRecord | HasError> {
		return await this.__realmFn.call('pub_updatePasswordAndReturnUser', {
			email: this.__emailInBrowser.get(),
			password: currentUserForm.password,
			newPassword: currentUserForm.newPassword,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
