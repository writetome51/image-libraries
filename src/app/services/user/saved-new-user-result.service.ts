import { DataRequestResultService } from '../data-request-result.service';
import { Injectable } from '@angular/core';
import { SuccessOrErrorMessageService }
	from '../../success-or-error-message/success-or-error-message.service';
import { UserResultProcessorService } from './user-result-processor.service';
import { DBUser } from '../../../interfaces/db-user';
import { hasValue } from '@writetome51/has-value-no-value';


@Injectable({
	providedIn: 'root'
})
export class SavedNewUserResultService {

	constructor(
		private __successOrErrorMessage: SuccessOrErrorMessageService,
		private __dataRequestResult: DataRequestResultService,
		private __userResultProcessor: UserResultProcessorService
	) {
	}


	interpret(result: DBUser) {
		result = this.__dataRequestResult.checkForError_returnIfOK(result);

		if (hasValue(result)) {
			this.__userResultProcessor.process(result);
			this.__successOrErrorMessage.success = 'User created!';
		}
	}


}
