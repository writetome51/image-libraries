import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';


@Injectable({
	providedIn: 'root'
})

// This lets the app know when to display the loading spinner
// and when to clear AlertService.data.

export class DataOperationBegunService {

	private __waitingForResult = false; // if true, you should show loading spinner.


	constructor(private __alert: AlertService) {
	}


	get waitingForResult(): boolean {
		return this.__waitingForResult;
	}


	set waitingForResult(value) {
		// Whenever a new data operation is begun, any data to user should be removed:
		if (value === true) this.__alert.success = '';

		this.__waitingForResult = value;
	}

}
