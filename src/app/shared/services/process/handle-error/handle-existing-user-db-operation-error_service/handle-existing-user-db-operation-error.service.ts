import { Injectable } from '@angular/core';
import { noRecordMatchedCriteria, notLoggedIn }
	from '@string-constants/mongo-db-realm-function-errors';
import { HandleNotLoggedInErrorService } from './handle-not-logged-in-error.service';
import { HandleNoRecordMatchErrorService } from './handle-no-record-match-error.service';
import { HandleErrorService } from '../handle-error.service';


@Injectable({providedIn: 'root'})
export class HandleExistingUserDBOperationErrorService extends HandleErrorService {

	constructor(
		private __handleNoRecordMatchError: HandleNoRecordMatchErrorService,
		private __handleNotLoggedInError: HandleNotLoggedInErrorService,
	) {
		super();
	}


	async go(error: { message: string }) {
		if (error.message) {
			if (error.message.includes(noRecordMatchedCriteria)) {
				return await this.__handleNoRecordMatchError.go();
			}
			if (error.message.includes(notLoggedIn)) {
				return await this.__handleNotLoggedInError.go();
			}
		}

		super.go(error);
	}

}
