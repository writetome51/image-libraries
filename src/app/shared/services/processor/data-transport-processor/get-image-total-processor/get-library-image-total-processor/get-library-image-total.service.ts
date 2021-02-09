import { Injectable } from '@angular/core';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { LibrariesInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/libraries-in-browser-storage.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';


@Injectable({providedIn: 'root'})
export class GetLibraryImageTotalService implements IDoThis {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {
	}

	async go(): Promise<{ dataTotal: number } | HasError> {
		try {
			let lib = this.__librariesInBrowser.get()[requestedLibrary.name];
			return {dataTotal: lib._image_ids.length};
		}
		catch (error) {
			return {error};
		}
	}

}
