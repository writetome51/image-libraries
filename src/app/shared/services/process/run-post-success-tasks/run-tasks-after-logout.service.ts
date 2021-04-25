import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { RemoveCachedDataService } from '@services/remove-cached-data_service/remove-cached-data.service';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class RunTasksAfterLogoutService implements IDoThis {

	constructor(
		private __router: Router,
		private __removeCachedData: RemoveCachedDataService,
	) {}


	async go() {
		this.__removeCachedData.go();
		await this.__router.navigate(['/']);
	}

}
