import { AlertService as alert } from '@services/alert.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { notLoggedIn } from '@string-constants/form-submission-errors';
import { RemoveCachedDataService as removeCachedData } from '@services/remove-cached-data.service';
import { Router } from '@angular/router';


// Use this handler when we've received an api error saying we're not
// logged in, but the browser is still storing session info.

@Injectable({providedIn: 'root'})
export class HandleNotLoggedInErrorService implements IDoThis {

	constructor(private __router: Router) {
	}


	async go() {
		removeCachedData.go();
		await this.__router.navigate(['/']);
		alert.setError(notLoggedIn);
	}

}
