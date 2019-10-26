import { CurrentUserService } from './current-user.service';
import { DBUser } from '../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { Processor } from '../../../interfaces/processor';
import { Router } from '@angular/router';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';


@Injectable({
	providedIn: 'root'
})
export class UserResultProcessorService implements Processor {

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
			// This may need to be moved to different class:
			this.__router.navigate(['/libraries']);
		}
	}


}
