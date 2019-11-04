import { AlertService } from '../alert.service';
import { DataOperationResultService } from './data-operation-result.service';
import { Injectable } from '@angular/core';
import { noDocumentMatchedCriteria, notLoggedIn } from '../../../constants/api-errors';
import { ErrorNotLoggedInService } from '../error/error-not-logged-in.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultService extends DataOperationResultService {


	constructor(
		_alert: AlertService,
		private __errorNotLoggedIn: ErrorNotLoggedInService
	) {
		super(_alert);
	}


	protected async _errorHandler(errMessage) {
		if (errMessage.includes(notLoggedIn) || errMessage.includes(noDocumentMatchedCriteria)) {
			await this.__errorNotLoggedIn.handler();
		}
		else super._errorHandler(errMessage);
	}


}
