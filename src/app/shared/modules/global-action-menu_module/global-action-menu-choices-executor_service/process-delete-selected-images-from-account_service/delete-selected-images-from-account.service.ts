import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu_module/global-action-menu-services.module';
import { GetSelectedImagesService as getSelectedImages} from '../get-selected-images.service';
import { ImageRecord } from '@interfaces/image-record.interface';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class DeleteSelectedImagesFromAccountService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {}


	async go(): Promise<{ success: true } | HasError> {
		const imageNames = getSelectedImages.go().map((img: ImageRecord) => img.name);

		return this.__realmFn.call('pub_deleteImages', {
			sessionID: this.__sessionIDInBrowser.get(),
			imageNames
		});
	}

}
