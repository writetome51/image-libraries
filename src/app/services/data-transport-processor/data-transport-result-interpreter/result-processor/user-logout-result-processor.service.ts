import { Injectable } from '@angular/core';
import { RemoveLocalDataAndRedirectHomeService }
	from '../../../remove-local-data-and-redirect-home.service';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { CurrentUserLibrariesService } from '../../../library/current-user-libraries.service';


@Injectable({
	providedIn: 'root'
})
export class UserLogoutResultProcessorService implements DirectProcessor {

	constructor(
		private __remove_localData_and_redirectHome: RemoveLocalDataAndRedirectHomeService,
		private __currentUserLibraries: CurrentUserLibrariesService
	) {
	}


	async process(result) {
		if (result.success) {
			this.__currentUserLibraries.unset_data();
			await this.__remove_localData_and_redirectHome.go();
		}
	}

}
