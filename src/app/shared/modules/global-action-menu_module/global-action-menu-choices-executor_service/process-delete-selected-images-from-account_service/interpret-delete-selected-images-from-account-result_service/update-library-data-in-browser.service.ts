import { GlobalActionMenuServicesModule } from '../../../global-action-menu-services.module';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { AssureUserDataLoadedService }
	from '@services/assure-user-data-loaded_service/assure-user-data-loaded.service';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class UpdateLibraryDataInBrowserService implements IDoThis {

	constructor(
		private __librariesInBrowser: LibrariesInBrowserStorageService,
		private __loadedLibraryInBrowser: LoadedLibraryInBrowserStorageService,
		private __assureUserDataLoaded: AssureUserDataLoadedService
	) {}


	async go() {
		this.__librariesInBrowser.remove();
		this.__loadedLibraryInBrowser.remove();
		await this.__assureUserDataLoaded.go();
	}

}
