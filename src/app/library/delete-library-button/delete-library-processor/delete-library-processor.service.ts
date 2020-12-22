import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { DeleteLibraryResultInterpreterService } from './delete-library-result-interpreter.service';
import { Injectable } from '@angular/core';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LibraryStorageService } from '@services/library/library-storage.service';


@Injectable({providedIn: 'root'})
export class DeleteLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryStorage: LibraryStorageService,
		__deleteLibraryResultInterpreter: DeleteLibraryResultInterpreterService
	) {
		super(__deleteLibraryResultInterpreter);
	}


	protected async _getResult(): Promise<{ success: true } | { error: { message: string } }>
	{
		return await this.__libraryStorage.delete(loadedLibrary.libName);
	}

}
