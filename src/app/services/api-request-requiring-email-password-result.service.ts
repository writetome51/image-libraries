import { APIRequestResultService } from './api-request-result.service';
import { AlertService } from './alert.service';
import { ErrorNoRecordMatchService } from './error/error-no-record-match.service';
import { Injectable } from '@angular/core';
import { invalidSessionID, noDocumentMatchedCriteria } from '../../constants/api-error-messages';


@Injectable({
	providedIn: 'root'
})
export class ApiRequestRequiringEmailPasswordResultService extends APIRequestResultService {


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
