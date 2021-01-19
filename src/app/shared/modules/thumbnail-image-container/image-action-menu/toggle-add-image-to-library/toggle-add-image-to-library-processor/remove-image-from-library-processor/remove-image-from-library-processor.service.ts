import { Injectable } from '@angular/core';
import { DBLibrary } from '@interfaces/db-library.interface';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { LibrariesInBrowserStorageService }
	from '@item-in-browser-storage/libraries-in-browser-storage.service';
import { removeFirstOf } from '@writetome51/array-remove-all-of-first-of';
import { RemoveImageFromLibraryResultInterpreterService }
	from './remove-image-from-library-result-interpreter/remove-image-from-library-result-interpreter.service';
import { LibraryUpdaterService } from '@services/library-updater.service';


@Injectable({providedIn: 'root'})
export class RemoveImageFromLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryUpdater: LibraryUpdaterService,
		private __localLibraries: LibrariesInBrowserStorageService,
		__resultInterpreter: RemoveImageFromLibraryResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	protected async _getResult(
		image_id, libName
	): Promise<DBLibrary | { error: { message: string } }> {

		let lib = this.__localLibraries.get()[libName];
		removeFirstOf(image_id, lib._image_ids);

		return await this.__libraryUpdater.update(libName, {_image_ids: lib._image_ids});
	}

}
