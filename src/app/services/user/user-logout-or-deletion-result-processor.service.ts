import { Injectable } from '@angular/core';
import { ResultProcessor } from '../../../interfaces/result-processor';
import { RemoveSessionIDAndRedirectHomeService } from '../remove-session-id-and-redirect-home.service';


@Injectable({
	providedIn: 'root'
})
export class UserLogoutOrDeletionResultProcessorService implements ResultProcessor {

	constructor(
		private __remove_sessionID_and_redirectHome: RemoveSessionIDAndRedirectHomeService
	) {
	}


	async process(result) {
		if (result.success) {
			await this.__remove_sessionID_and_redirectHome.go();
		}
	}


}
