import { Injectable } from '@angular/core';
import { LibraryStorageService } from '@services/library/library-storage.service';
import { DBLibrary } from '@interfaces/db-library';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { LocalLibrariesService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-libraries.service';
import { removeFirstOf } from '@writetome51/array-remove-all-of-first-of';
import { RemoveImageFromLibraryResultInterpreterService }
	from './remove-image-from-library-result-interpreter/remove-image-from-library-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class RemoveImageFromLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryStorage: LibraryStorageService,
		private __localLibraries: LocalLibrariesService,
		__resultInterpreter: RemoveImageFromLibraryResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	protected async _getResult(
		image_id, libName
	): Promise<DBLibrary | { error: { message: string } }> {

		let lib = this.__localLibraries.get()[libName];
		removeFirstOf(image_id, lib._image_ids);

		return await this.__libraryStorage.update(libName, {_image_ids: lib._image_ids});
	}

}