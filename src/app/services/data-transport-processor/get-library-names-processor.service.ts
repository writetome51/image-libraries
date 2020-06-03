import { DataTransportProcessorService } from './data-transport-processor.service';
import { LibraryStorageService } from '../library/library-storage.service';
import { DBLibrary } from '../../../interfaces/db-library';
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


	protected async _getResult(): Promise<DBLibrary[] | { error: object }> {
		return await this.__libraryStorage.getAll();
	}

}
