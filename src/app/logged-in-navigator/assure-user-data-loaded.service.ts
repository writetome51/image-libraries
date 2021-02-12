import { Injectable } from '@angular/core';
import { AssureUserImageTotalIsStoredLocallyService }
	from '@services/assure-user-image-total-is-stored-locally.service';
import { AssureLibrariesAreStoredLocallyService }
	from '@services/assure-libraries-are-stored-locally.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class AssureUserDataLoadedService implements IDoThis {

	constructor(
		private __assureUserImageTotalIsStoredLocally: AssureUserImageTotalIsStoredLocallyService,
		private __assureLibrariesAreStoredLocally: AssureLibrariesAreStoredLocallyService
		) {
	}


	async go() {
		await this.__assureUserImageTotalIsStoredLocally.go();
		await this.__assureLibrariesAreStoredLocally.go();
	}

}
