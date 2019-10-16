import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from '../session-id-local-storage.service';
import { Router } from '@angular/router';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultProcessorService {

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
