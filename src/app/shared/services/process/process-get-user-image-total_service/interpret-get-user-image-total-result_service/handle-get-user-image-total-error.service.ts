import { Injectable } from '@angular/core';
import { HandleExistingUserDBOperationErrorService } from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';
import { HandleNoRecordMatchErrorService } from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-no-record-match-error.service';
import { HandleNotLoggedInErrorService } from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-not-logged-in-error.service';
import { UserImageTotalInBrowserStorageService } from '@browser-storage/user-image-total-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class HandleGetUserImageTotalErrorService extends HandleExistingUserDBOperationErrorService {

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
