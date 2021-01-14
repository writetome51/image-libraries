import { AddImageToLibraryResultInterpreterService }
	from './add-image-to-library-result-interpreter/add-image-to-library-result-interpreter.service';
import { DataTransportProcessorService }
	from '@services/processor/data-transport-processor/data-transport-processor.service';
import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { LibraryUpdaterService } from '@services/library-updater.service';
import { LibrariesInBrowserStorageService }
	from '@item-in-browser-storage/libraries-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class AddImageToLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryUpdater: LibraryUpdaterService,
		private __localLibraries: LibrariesInBrowserStorageService,
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

		return await this.__libraryUpdater.update(libName, changes);
	}

}
