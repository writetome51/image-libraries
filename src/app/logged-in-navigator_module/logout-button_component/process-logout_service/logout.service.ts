import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LoggedInNavigatorServicesModule } from '../../logged-in-navigator-services.module';
import { MongoDBRealmFunctionService } from '@services/db-related/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@services/browser-storage-related/session-id-in-browser-storage.service';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class LogoutService implements IDoThis {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realmFn: MongoDBRealmFunctionService
	) {
	}


	async go(): Promise<{ success: true } | HasError> {
		return await this.__realmFn.call('pub_logoutUser',
			{sessionID: this.__sessionIDInBrowser.get()}
		);
	}

}
