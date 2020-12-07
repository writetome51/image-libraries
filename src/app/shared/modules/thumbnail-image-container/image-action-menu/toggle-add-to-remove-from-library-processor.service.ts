import { Injectable } from '@angular/core';
import { LibraryStorageService } from '@services/library/library-storage.service';
import { LocalLibrariesService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-libraries.service';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { UpdateLibraryResultInterpreterService }
	from '@services/library/update-library-processor/update-library-result-interpreter.service';

@Injectable({providedIn: 'root'})

export class ToggleAddToRemoveFromLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryStorage: LibraryStorageService,
		private __localLibraries: LocalLibrariesService,
		__updateLibraryResultInterpreter: UpdateLibraryResultInterpreterService
	) {
		super(__updateLibraryResultInterpreter);
	}

	protected async _getResult(
		data: { image_id: string, libName: string, checked: boolean }
	): Promise<any> {
		await this.__libraryStorage.update(data.libName, {});

	}

}
