import { AlertService } from '../alert.service';
import { DataOperationResultCheckService } from './data-operation-result-check.service';
import { Injectable } from '@angular/core';
import { invalidSessionID, noDocumentMatchedCriteria } from '../../../constants/api-errors';
import { NoRecordMatchErrorHandlerService } from '../error/no-record-match-error-handler.service';


@Injectable({
	providedIn: 'root'
})
export class OperationRequiringEmailPasswordResultCheckService extends DataOperationResultCheckService {


	constructor(
		_alert: AlertService,
		private __noRecordMatchErrorHandler: NoRecordMatchErrorHandlerService
	) {
		super(_alert);
	}


	protected async _errorHandler(errMessage) {
		if (errMessage.includes(noDocumentMatchedCriteria) || errMessage.includes(invalidSessionID)) {
			await this.__noRecordMatchErrorHandler.handle();
		}
		else super._errorHandler(errMessage);
	}


}
