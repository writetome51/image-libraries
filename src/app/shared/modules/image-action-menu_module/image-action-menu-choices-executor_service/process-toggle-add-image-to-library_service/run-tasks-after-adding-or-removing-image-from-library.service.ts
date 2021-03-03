import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { DBLibrary } from '@interfaces/db-library.interface';
import { LibrariesInBrowserStorageService }
	from '@services/browser-storage-related/libraries-in-browser-storage.service';
import { ImageActionMenuServicesModule } from '@app/shared/modules/image-action-menu_module/image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class RunTasksAfterAddingOrRemovingImageFromLibraryService implements IDoThis {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {
	}


	go(lib: DBLibrary) {
		this.__updateLocalLibraries(lib);
	}


	private __updateLocalLibraries(lib) {
		let libraries = this.__librariesInBrowser.get();
		libraries[lib.name] = lib;
		this.__librariesInBrowser.set(libraries);
	}

}
