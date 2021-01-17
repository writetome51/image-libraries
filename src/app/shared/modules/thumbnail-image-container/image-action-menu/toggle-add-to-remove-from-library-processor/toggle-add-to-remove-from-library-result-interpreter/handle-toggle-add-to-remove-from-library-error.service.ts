import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { DBLibrary } from '@interfaces/db-library.interface';
import { LibrariesInBrowserStorageService }
	from '@item-in-browser-storage/libraries-in-browser-storage.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class HandleToggleAddToRemoveFromLibraryErrorService implements IDoThis {

	constructor(private __localLibraries: LibrariesInBrowserStorageService) {
	}


	go(
		data: { image_id: string, libName: string, checked: boolean }
	): { image_id: string, libName: string, checked: boolean } | void
	{
		let lib: DBLibrary = this.__localLibraries.get()[data.libName];

		return this.__if_imageIDs_isProperlyModified_returnData(lib._image_ids, data);
	}


	private __if_imageIDs_isProperlyModified_returnData(image_ids, data) {
		if (data.checked) {
			if (not(image_ids.includes(data.image_id))) return data;
		}
		else {
			if (image_ids.includes(data.image_id)) return data;
		}
		alert.error = 'Library change unsuccessful';
	}

}
