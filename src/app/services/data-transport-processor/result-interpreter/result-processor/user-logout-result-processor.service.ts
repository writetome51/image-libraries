import { Injectable } from '@angular/core';
import { ResultProcessor } from '../../../../interfaces/result-processor';
import { RemoveLocalDataAndRedirectHomeService }
	from '../../../remove-local-data-and-redirect-home.service';


@Injectable({
	providedIn: 'root'
})
export class UserLogoutResultProcessorService implements ResultProcessor {

	constructor(
		private __remove_localSessionID_and_redirectHome: RemoveLocalDataAndRedirectHomeService
	) {
	}


	async process(result) {
		if (result.success) {
			await this.__remove_localSessionID_and_redirectHome.go();
		}
	}

}
