import { Injectable } from '@angular/core';
import { RemoveCachedDataService } from '@services/remove-cached-data.service';
import { Router } from '@angular/router';
import { IDoThis } from '@interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksAfterLogoutService implements IDoThis {

	constructor(
		private __removeCachedData: RemoveCachedDataService,
		private __router: Router
	) {
	}


	async go() {
		this.__removeCachedData.go();
		await this.__router.navigate(['/']);
	}

}
