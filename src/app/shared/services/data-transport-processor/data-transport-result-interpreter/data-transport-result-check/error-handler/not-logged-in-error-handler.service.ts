import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { Injectable } from '@angular/core';
import { notLoggedIn } from '@string-constants/form-submission-errors';
import { RemoveCachedDataService as removeCachedData } from '@services/remove-cached-data.service';
import { Handler } from '@interfaces/handler';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
// Use this handler when we've received an api error saying we're not
// logged in, but the browser is still storing session info.

export class NotLoggedInErrorHandlerService implements Handler {

	constructor(private __router: Router) {
	}


	async handle() {
		removeCachedData.go();
		await this.__router.navigate(['/']);
		alert.error = notLoggedIn;
	}

}
