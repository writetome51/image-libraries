import { APIRequestResultService } from './api-request-result.service';
import { AlertService } from './alert.service';
import { Injectable } from '@angular/core';
import { ErrorNoDocumentMatchService } from './error-no-document-match.service';


@Injectable({
	providedIn: 'root'
})
export class ApiRequestRequiringEmailPasswordResultService extends APIRequestResultService {


	constructor(
		_alert: AlertService,
		private __errorNoDocumentMatch: ErrorNoDocumentMatchService
	) {
		super(_alert);
	}


	protected async _errorHandler(errMessage) {
		if (
			errMessage.includes('Operation not performed.  No document matched the request criteria')
			|| errMessage.includes('Invalid sessionID')
		) await this.__errorNoDocumentMatch.handler();

		else super._errorHandler(errMessage);
	}


}
