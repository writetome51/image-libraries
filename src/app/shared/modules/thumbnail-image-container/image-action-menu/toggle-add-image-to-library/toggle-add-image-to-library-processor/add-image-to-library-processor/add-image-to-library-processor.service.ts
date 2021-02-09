import { AddImageToLibraryResultInterpreterService }
	from './add-image-to-library-result-interpreter/add-image-to-library-result-interpreter.service';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { DBLibrary } from '@interfaces/db-library.interface';
import { Injectable } from '@angular/core';
import { UpdateLibraryService } from '@services/update-library.service';
import { LibrariesInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/libraries-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';


@Injectable({providedIn: 'root'})
export class AddImageToLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryUpdater: UpdateLibraryService,
		private __localLibraries: LibrariesInBrowserStorageService,
		__resultInterpreter: AddImageToLibraryResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	protected async _getResult(
		image_id, libName
	): Promise<DBLibrary | HasError> {

		let lib = this.__localLibraries.get()[libName];
		let changes = {}, index = lib._image_ids.length;
		changes[`_image_ids.${index}`] = image_id;

		return await this.__libraryUpdater.go(libName, changes);
	}

}
