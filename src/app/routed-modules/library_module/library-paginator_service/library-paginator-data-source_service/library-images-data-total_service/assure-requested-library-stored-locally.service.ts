import { Injectable } from '@angular/core';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { LibraryServicesModule } from '../../../library-services.module';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { noValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: LibraryServicesModule})
export class AssureRequestedLibraryStoredLocally implements IDoThis {

	constructor(
		private __librariesInBrowser: LibrariesInBrowserStorageService,
		private __loadedLibrary: LoadedLibraryInBrowserStorageService
	) {}


	go() {
		let library = this.__loadedLibrary.get();
		if (noValue(library) || library.name !== requestedLibrary.name) {

			this.__loadedLibrary.set(
				this.__librariesInBrowser.get()[requestedLibrary.name]
			);
		}
	}

}
