import { CurrentUserService as currentUser } from '../user/current-user.service';
import { DBUser } from '../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { ResultProcessor } from '../../../interfaces/result-processor';


@Injectable({
	providedIn: 'root'
})
export class UserResultProcessorService implements ResultProcessor {

	constructor(private __localSessionID: LocalSessionIDService) {
	}


	process(result: DBUser): void {
		if (result.sessionID) {
			this.__localSessionID.set(result.sessionID);
			currentUser.dbUser = result;
		}
	}

}
