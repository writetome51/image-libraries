import { Injectable } from '@angular/core';
import { HandleDbOperationErrorService } from '@handle-db-operation-error_service/handle-db-operation-error.service';
import { HandleNoRecordMatchErrorService } from '@handle-db-operation-error_service/handle-no-record-match-error.service';
import { HandleNotLoggedInErrorService } from '@handle-db-operation-error_service/handle-not-logged-in-error.service';
import { UserImageTotalInBrowserStorageService } from '@browser-storage/user-image-total-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class HandleGetUserImageTotalErrorService extends HandleDbOperationErrorService {

	constructor(
		private __userImageTotal: UserImageTotalInBrowserStorageService,
		__handleNoRecordMatchError: HandleNoRecordMatchErrorService,
		__handleNotLoggedInError: HandleNotLoggedInErrorService,
	) {
		super(__handleNoRecordMatchError, __handleNotLoggedInError);
	}


	async go(error) {
		this.__userImageTotal.remove();
		await super.go(error);
	}

}
