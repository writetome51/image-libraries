import { AssureUserImageTotalIsStoredLocallyService }
	from './assure-user-image-total-is-stored-locally.service';
import { AssureLibrariesAreStoredLocallyService }
	from './assure-libraries-are-stored-locally.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LoggedInNavigatorServicesModule } from '../logged-in-navigator-services.module';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
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
