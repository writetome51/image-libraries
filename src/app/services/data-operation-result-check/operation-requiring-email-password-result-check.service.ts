import { AlertService } from '../alert.service';
import { DataOperationResultCheckService } from './data-operation-result-check.service';
import { ErrorNoRecordMatchService } from '../error/error-no-record-match.service';
import { Injectable } from '@angular/core';
import { invalidSessionID, noDocumentMatchedCriteria } from '../../../constants/api-errors';


@Injectable({
	providedIn: 'root'
})
export class OperationRequiringEmailPasswordResultCheckService extends DataOperationResultCheckService {


	constructor(
		_alert: AlertService,
		private __errorNoRecordMatch: ErrorNoRecordMatchService
	) {
		super(_alert);
	}


	protected async _errorHandler(errMessage) {
		if (errMessage.includes(noDocumentMatchedCriteria) || errMessage.includes(invalidSessionID)) {
			await this.__errorNoRecordMatch.handler();
		}
		else super._errorHandler(errMessage);
	}


}
