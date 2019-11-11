import { DataOperationResultCheckService } from './data-operation-result-check.service';
import { Injectable } from '@angular/core';
import { noDocumentMatchedCriteria, notLoggedIn } from '../../../constants/api-errors';
import { NotLoggedInErrorHandlerService } from '../error/not-logged-in-error-handler.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultCheckService extends DataOperationResultCheckService {

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
