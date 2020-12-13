import { AddImageToLibraryResultInterpreterService }
	from './add-image-to-library-result-interpreter.service';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { LibraryStorageService } from '@services/library/library-storage.service';
import { LocalLibrariesService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-libraries.service';


@Injectable({providedIn: 'root'})

export class AddImageToLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryStorage: LibraryStorageService,
		private __localLibraries: LocalLibrariesService,
		__resultInterpreter: AddImageToLibraryResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	protected async _getResult(
		image_id, libName
	): Promise<DBLibrary | { error: { message: string } }> {

		let lib = this.__localLibraries.get()[libName];
		let changes = {}, index = lib._image_ids.length;
		changes[`_image_ids.${index}`] = image_id;

		return await this.__libraryStorage.update(libName, changes);
	}

}
