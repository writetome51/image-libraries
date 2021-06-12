import { AssureUserImageTotalStoredLocallyService }
	from './assure-user-image-total-stored-locally.service';
import { AssureLibrariesStoredLocallyService } from './assure-libraries-stored-locally.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LoggedInNavigatorServicesModule } from '../logged-in-navigator-services.module';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class AssureUserDataLoadedService implements IDoThis {

	constructor(
		private __assureUserImageTotalStoredLocally: AssureUserImageTotalStoredLocallyService,
		private __assureLibrariesStoredLocally: AssureLibrariesStoredLocallyService
	) {}


	async go() {
		await this.__assureUserImageTotalStoredLocally.go();
		await this.__assureLibrariesStoredLocally.go();
	}

}
