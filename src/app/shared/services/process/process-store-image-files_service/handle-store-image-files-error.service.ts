import { AlertService as alert } from '@services/alert.service';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class HandleStoreImageFilesErrorService implements IDoThis {

	// Default error handler for all processes.

	go(error: { message: string }) {
		// We expect `error` to have 'message':
		if (error.message) alert.setError(error.message);

		else {  // This is for displaying unexpected errors.
			alert.setError(error.toString());
		}
	}

}
