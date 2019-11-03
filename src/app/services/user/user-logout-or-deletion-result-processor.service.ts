import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';
import { ResultProcessor } from '../../../interfaces/result-processor';


@Injectable({
	providedIn: 'root'
})
export class UserLogoutOrDeletionResultProcessorService implements ResultProcessor {

	constructor(
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
		private __router: Router
	) {
	}


	async process(result) {
		if (result.success) {
			this.__sessionIDLocalStorage.remove();
			await this.__router.navigate(['/']); // logged-out homepage.
		}
	}


}
