import { AlertsService as alerts } from '@services/alerts.service';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class HandleErrorService implements IDoThis {

	// Default error handler for all processes.

	go(error: { message: string }) {
		// We expect `error` to have 'message':
		if (error.message) alerts.setError(error.message);

		else {  // This is for displaying unexpected errors.
			alerts.setError(error.toString());
		}
	}

}
