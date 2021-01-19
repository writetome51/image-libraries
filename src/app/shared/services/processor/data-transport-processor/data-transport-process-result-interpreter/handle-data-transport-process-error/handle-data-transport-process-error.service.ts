import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { Injectable } from '@angular/core';
import { noRecordMatchedCriteria, notLoggedIn } from '@string-constants/rest-api-errors';
import { HandleNotLoggedInErrorService }
	from './error-handler/handle-not-logged-in-error.service';
import { HandleNoRecordMatchErrorService }
	from './error-handler/handle-no-record-match-error.service';
import { HandleProcessErrorService }
	from '@processor/handle-process-error.service';


@Injectable({providedIn: 'root'})
export class HandleDataTransportProcessErrorService extends HandleProcessErrorService {

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
