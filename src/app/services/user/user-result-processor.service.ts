import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';
import { CurrentUserService } from './current-user.service';
import { Router } from '@angular/router';
import { DBUser } from '../../../interfaces/db-user';


@Injectable({
	providedIn: 'root'
})
export class UserResultProcessorService {

	constructor(
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
		private __currentUser: CurrentUserService,
		private __router: Router
	) {
	}


	process(result: DBUser): void {
		if (result.sessionID) {
			this.__sessionIDLocalStorage.set(result.sessionID);
			this.__currentUser.dbUser = result;
			this.__router.navigate(['/libraries']);
		}
	}


}
