import { Injectable } from '@angular/core';
import { LibraryStorageService } from '@services/library/library-storage.service';
import { LocalLibrariesService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-libraries.service';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { UpdateLibraryResultInterpreterService }
	from '@services/library/update-library-processor/update-library-result-interpreter.service';
import { DBLibrary } from '@interfaces/db-library';


@Injectable({providedIn: 'root'})

export class AddImageToLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryStorage: LibraryStorageService,
		private __localLibraries: LocalLibrariesService,
		__updateLibraryResultInterpreter: UpdateLibraryResultInterpreterService
	) {
		super(__updateLibraryResultInterpreter);
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
