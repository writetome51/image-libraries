import { Injectable } from '@angular/core';
import { ResultProcessor } from '../../../interfaces/result-processor';
import { RemoveLocalSessionIDAndRedirectHomeService } from '../remove-local-session-id-and-redirect-home.service';


@Injectable({
	providedIn: 'root'
})
export class UserLogoutResultProcessorService implements ResultProcessor {

	constructor(
		private __remove_localSessionID_and_redirectHome: RemoveLocalSessionIDAndRedirectHomeService
	) {
	}


	async process(result) {
		if (result.success) {
			await this.__remove_localSessionID_and_redirectHome.go();
		}
	}

}
