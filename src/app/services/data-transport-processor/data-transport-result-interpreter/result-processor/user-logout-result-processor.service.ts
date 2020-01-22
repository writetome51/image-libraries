import { Injectable } from '@angular/core';
import { RemoveCachedDataService } from '../../../remove-cached-data.service';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})

export class UserLogoutResultProcessorService implements DirectProcessor {

	constructor(
		private __removeCachedData: RemoveCachedDataService,
		private __router: Router
	) {
	}


	async process(result) {
		if (result.success) {
			this.__removeCachedData.go();
			await this.__router.navigate(['/']); // logged-out homepage.
		}
	}

}
