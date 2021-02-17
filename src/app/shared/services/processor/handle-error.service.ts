import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class HandleErrorResultService implements IDoThis {

	// Default error handler.  Intended to be extended by subclasses.

	go(error: { message: string }) {
		// We expect `error` to have 'message':
		if (error.message) alert.error = error.message;

		else {  // This is for displaying unexpected errors.
			alert.error = error.toString();
		}
	}

}
