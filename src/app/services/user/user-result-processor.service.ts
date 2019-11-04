import { CurrentUserService } from './current-user.service';
import { DBUser } from '../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { ResultProcessor } from '../../../interfaces/result-processor';
import { LocalSessionIDService } from '../authentication/local-session-id.service';


@Injectable({
	providedIn: 'root'
})
export class UserResultProcessorService implements ResultProcessor {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __currentUser: CurrentUserService
	) {
	}


	process(result: DBUser): void {
		if (result.sessionID) {
			this.__localSessionID.set(result.sessionID);
			this.__currentUser.dbUser = result;
		}
	}


}
