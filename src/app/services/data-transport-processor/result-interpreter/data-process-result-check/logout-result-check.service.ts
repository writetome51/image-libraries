import { DataProcessResultCheckService } from './data-process-result-check.service';
import { Injectable } from '@angular/core';
import { noDocumentMatchedCriteria, notLoggedIn } from '../../../../string-constants/api-errors';
import { NotLoggedInErrorHandlerService } from './error/not-logged-in-error-handler.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultCheckService extends DataProcessResultCheckService {

	constructor(
		private __notLoggedInErrorHandler: NotLoggedInErrorHandlerService
	) {
		super();
	}


	protected async _errorHandler(errMessage) {
		if (errMessage.includes(notLoggedIn) || errMessage.includes(noDocumentMatchedCriteria)) {
			await this.__notLoggedInErrorHandler.handle();
		}
		else super._errorHandler(errMessage);
	}

}
