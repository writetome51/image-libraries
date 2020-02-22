import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { Injectable } from '@angular/core';
import { noDocumentMatchedCriteria } from '../../../../string-constants/api-errors';
import { NotLoggedInErrorHandlerService } from './error/not-logged-in-error-handler.service';
import { NoRecordMatchErrorHandlerService } from './error/no-record-match-error-handler.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultCheckService extends DataTransportResultCheckService {

	constructor(
		_notLoggedInErrorHandler: NotLoggedInErrorHandlerService,
		private __noRecordMatchErrorHandler: NoRecordMatchErrorHandlerService
	) {
		super(_notLoggedInErrorHandler);
	}


	protected async _errorHandler(errMessage) {
		if (errMessage.includes(noDocumentMatchedCriteria)) {
			await this.__noRecordMatchErrorHandler.handle();
		}
		else await super._errorHandler(errMessage);
	}

}
