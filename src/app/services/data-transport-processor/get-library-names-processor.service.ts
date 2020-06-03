import { DataTransportProcessorService } from './data-transport-processor.service';
import { LibraryStorageService } from '../library/library-storage.service';
import { GetLibraryNamesResultInterpreterService }
	from './data-transport-result-interpreter/get-library-names-result-interpreter.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class GetLibraryNamesProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryStorage: LibraryStorageService,
		__getLibraryNamesResultInterpreter: GetLibraryNamesResultInterpreterService
	) {
		super(__getLibraryNamesResultInterpreter);
	}


	protected async _getResult(): Promise<string>
		// JSON containing: DBLibrary[] | {error: {message: string}}
	{
		return await this.__libraryStorage.getAll();
	}

}
