import { Injectable } from '@angular/core';
import { RemoveLocalDataAndRedirectHomeService }
	from '../../../remove-local-data-and-redirect-home.service';
import { DirectProcessor } from '../../../../interfaces/direct-processor';


@Injectable({
	providedIn: 'root'
})
export class UserLogoutResultProcessorService implements DirectProcessor {

	constructor(
		private __remove_localData_and_redirectHome: RemoveLocalDataAndRedirectHomeService
	) {
	}


	async process(result) {
		if (result.success) {
			await this.__remove_localData_and_redirectHome.go();
		}
	}

}
