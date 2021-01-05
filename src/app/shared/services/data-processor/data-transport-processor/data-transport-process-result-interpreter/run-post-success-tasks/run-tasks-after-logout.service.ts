import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { RemoveCachedDataService as removeCachedData } from '@services/remove-cached-data.service';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class RunTasksAfterLogoutService implements IDoThis {

	constructor(private __router: Router) {
	}


	async go() {
		removeCachedData.go();
		await this.__router.navigate(['/']);
	}

}
