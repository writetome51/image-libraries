import { DataProcessResultCheckService } from './data-process-result-check.service';
import { Injectable } from '@angular/core';
import { invalidSessionID, noDocumentMatchedCriteria } from '../../../../string-constants/api-errors';
import { NoRecordMatchErrorHandlerService } from './error/no-record-match-error-handler.service';


@Injectable({
	providedIn: 'root'
})
export class OperationRequiringEmailPasswordResultCheckService extends DataProcessResultCheckService {


	constructor(private __noRecordMatchErrorHandler: NoRecordMatchErrorHandlerService) {
		super();
	}


	protected async _errorHandler(errMessage) {
		if (errMessage.includes(noDocumentMatchedCriteria) || errMessage.includes(invalidSessionID)) {
			await this.__noRecordMatchErrorHandler.handle();
		}
		else super._errorHandler(errMessage);
	}


}
