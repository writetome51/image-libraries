import { Injectable } from '@angular/core';
import { noRecordMatchedCriteria, notLoggedIn } from '@string-constants/mongo-db-realm-function-errors';
import { HandleNotLoggedInErrorService }
	from './error-handler/handle-not-logged-in-error.service';
import { HandleNoRecordMatchErrorService }
	from './error-handler/handle-no-record-match-error.service';
import { HandleErrorService }
	from '@processor/handle-error/handle-error.service';


@Injectable({providedIn: 'root'})
export class HandleDataTransportErrorService extends HandleErrorService {

	constructor(
		private __handleNoRecordMatchError: HandleNoRecordMatchErrorService,
		protected _handleNotLoggedInError: HandleNotLoggedInErrorService,
	) {
		super();
	}


	async go(error: { message: string }) {
		if (error.message) {
			if (error.message.includes(noRecordMatchedCriteria)) {
				return await this.__handleNoRecordMatchError.go();
			}
			if (error.message.includes(notLoggedIn)) {
				return await this._handleNotLoggedInError.go();
			}
		}

		super.go(error);
	}

}
