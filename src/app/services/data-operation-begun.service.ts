import { Injectable } from '@angular/core';
import { SuccessOrErrorMessageService } from './success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})

// This is for letting the app know when to display the loading spinner.

export class DataOperationBegunService {

	private __waitingForResult = false; // if true, you should show loading spinner.


	constructor(private __successOrErrorMessage: SuccessOrErrorMessageService) {
	}


	get waitingForResult(): boolean {
		return this.__waitingForResult;
	}


	set waitingForResult(value) {
		// Whenever a new data operation is begun, any message should be removed:
		if (value === true) this.__successOrErrorMessage.success = '';

		this.__waitingForResult = value;
	}

}
