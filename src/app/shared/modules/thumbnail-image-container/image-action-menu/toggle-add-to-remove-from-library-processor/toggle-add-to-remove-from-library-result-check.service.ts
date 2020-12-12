import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { DBLibrary } from '@interfaces/db-library';
import { LocalLibrariesService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-libraries.service';


@Injectable({providedIn: 'root'})

export class ToggleAddToRemoveFromLibraryResultCheckService {

	constructor(private __localLibraries: LocalLibrariesService) {
	}


	returnIfNoError(
		data: { image_id: string, libName: string, checked: boolean }
	): { image_id: string, libName: string, checked: boolean } {

		let lib: DBLibrary = this.__localLibraries.get()[data.libName];

		if (data.checked) {
			if (not(lib._image_ids.includes(data.image_id))) return data;
		}
		else {
			if (lib._image_ids.includes(data.image_id)) return data;
		}
	}

}
