import { AlertService as alert } from '../../../../alert.service';
import { Injectable } from '@angular/core';
import { notLoggedIn } from '../../../../../string-constants/form-submission-errors';
import { RemoveCachedDataService }
	from '../../../../remove-cached-data.service';
import { Handler } from '../../../../../interfaces/handler';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})

// Use this handler when we've received an api error saying we're not
// logged in, but the browser is still storing session info.

export class NotLoggedInErrorHandlerService implements Handler {


	constructor(
		private __removeCachedData: RemoveCachedDataService,
		private __router: Router
	) {
	}


	async handle() {
		await this.__removeCachedData.go();
		await this.__router.navigate(['/']); // logged-out homepage.
		alert.error = notLoggedIn;
	}

}
