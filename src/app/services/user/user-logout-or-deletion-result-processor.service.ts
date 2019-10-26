import { Injectable } from '@angular/core';
import { Processor } from '../../../interfaces/processor';
import { Router } from '@angular/router';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';


@Injectable({
	providedIn: 'root'
})
export class UserLogoutOrDeletionResultProcessorService implements Processor {

	constructor(
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
		private __router: Router
	) {
	}


	process(result) {
		if (result.success) {
			this.__sessionIDLocalStorage.remove();
			this.__router.navigate(['/']); // logged-out homepage.
		}
	}


}
