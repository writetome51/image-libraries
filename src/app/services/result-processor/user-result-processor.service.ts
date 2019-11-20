import { CurrentUserService as currentUser} from '../user/current-user.service';
import { DBUser } from '../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { ResultProcessor } from '../../interfaces/result-processor';
import { LocalSessionIDService } from '../authentication/local-session-id.service';


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
